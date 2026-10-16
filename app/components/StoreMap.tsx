"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapPoint = { id: number; nombre: string; lat: number; lng: number };

type Props = {
  points: MapPoint[];
  activeId?: number;
  focusId?: number | null;
  onSelect: (id: number) => void;
};

const pinHtml = (id: number, active: boolean) =>
  `<div class="pin${active ? " active" : ""}"><span class="pin-inner">${id}</span></div>`;

export default function StoreMap({ points, activeId, focusId, onSelect }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const markers = useRef<Map<number, Marker>>(new Map());
  const L = useRef<typeof import("leaflet") | null>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  // Leaflet toca window al importarse: se carga solo en el cliente.
  useEffect(() => {
    let cancelled = false;
    import("leaflet").then((mod) => {
      if (cancelled || !el.current || map.current) return;
      L.current = mod;
      map.current = mod
        .map(el.current, { scrollWheelZoom: false, zoomControl: true, attributionControl: true })
        .setView([-34.585, -58.43], 13);
      mod
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        })
        .addTo(map.current);
      syncMarkers();
      fit();
    });
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
      markers.current.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function syncMarkers() {
    const lf = L.current;
    const m = map.current;
    if (!lf || !m) return;

    const ids = new Set(points.map((p) => p.id));
    markers.current.forEach((mk, id) => {
      if (!ids.has(id)) {
        mk.remove();
        markers.current.delete(id);
      }
    });

    points.forEach((p) => {
      const icon = lf.divIcon({
        className: "gyra-marker",
        html: pinHtml(p.id, p.id === activeId),
        iconSize: [38, 38],
        iconAnchor: [19, 46],
      });
      const existing = markers.current.get(p.id);
      if (existing) {
        existing.setIcon(icon);
        existing.setZIndexOffset(p.id === activeId ? 1000 : 0);
      } else {
        const mk = lf
          .marker([p.lat, p.lng], { icon, title: p.nombre, zIndexOffset: p.id === activeId ? 1000 : 0 })
          .on("click", () => onSelectRef.current(p.id))
          .addTo(m);
        markers.current.set(p.id, mk);
      }
    });
  }

  useEffect(syncMarkers);

  // Encuadra los locales visibles. Pilar queda lejos: si hay locales en
  // CABA y alrededores, se encuadran esos para que no queden diminutos.
  function fit() {
    const lf = L.current;
    const m = map.current;
    if (!lf || !m || points.length === 0) return;
    const near = points.filter((p) => p.lng > -58.6);
    const box = near.length ? near : points;
    if (box.length === 1) m.setView([box[0].lat, box[0].lng], 15);
    else m.fitBounds(lf.latLngBounds(box.map((p) => [p.lat, p.lng])), { padding: [48, 48], maxZoom: 15 });
  }

  const key = points.map((p) => p.id).join(",");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fit, [key]);

  // Al hacer click en un local de la lista, llevar el mapa hasta él si no está a la vista.
  useEffect(() => {
    const m = map.current;
    const p = points.find((x) => x.id === focusId);
    if (!m || !p) return;
    if (!m.getBounds().pad(-0.1).contains([p.lat, p.lng])) m.setView([p.lat, p.lng], Math.max(m.getZoom(), 13));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusId]);

  return <div ref={el} className="leaflet-host" />;
}
