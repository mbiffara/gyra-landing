import type { Metadata } from "next";
import "./colors_and_type.css";
import "./landing.css";

export const metadata: Metadata = {
  title: "GYRA · El yogurt helado que siempre quisiste tener en casa",
  description:
    "Yogurt helado griego sin azúcar — para tu freezer. Para repetir. Hecho por médicos y heladeros expertos en Buenos Aires.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
