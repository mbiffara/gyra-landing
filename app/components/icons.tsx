import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const IcCheck = (p: Props) => (
  <svg viewBox="0 0 16 16" fill="none" {...p}>
    <path d="M3 8.5l3 3 7-7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IcClose = (p: Props) => (
  <svg viewBox="0 0 16 16" fill="none" {...p}>
    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const IcSearch = (p: Props) => (
  <svg viewBox="0 0 16 16" fill="none" {...p}>
    <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10.5 10.5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IcArrow = (p: Props) => (
  <svg viewBox="0 0 16 16" fill="none" {...p}>
    <path d="M3 8h10M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IcInsta = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
  </svg>
);

export const IcWA = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M20.5 12a8.5 8.5 0 1 1-15.7 4.5L3.5 20.5l4.1-1.2A8.5 8.5 0 0 0 20.5 12z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.2-1.6-1-0.9 0.7c-0.8-0.5-1.6-1.2-2.1-2.1l0.7-0.9-1-1.6L9.6 9.6z"
      fill="currentColor"
    />
  </svg>
);

export const IcMail = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

export const IcGlobe = (p: Props) => (
  <svg viewBox="0 0 16 16" width="14" height="14" {...p}>
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M1.5 8h13M8 1.5c2 1.8 3 4 3 6.5s-1 4.7-3 6.5c-2-1.8-3-4-3-6.5s1-4.7 3-6.5z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);
