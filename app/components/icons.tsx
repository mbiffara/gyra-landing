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

export const IcShieldCheck = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M12 2.5l8 3v6c0 4.5-3.2 8.5-8 10-4.8-1.5-8-5.5-8-10v-6l8-3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 12.2l2.4 2.4 4.6-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
      d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 8.2c-.3 0-.7.1-.9.5-.3.4-.8 1-.6 2 .3 1.5 1.6 3.3 3.3 4.4 1.3.8 2.3 1 2.9.8.5-.2.9-.6 1-1 .1-.3 0-.5-.2-.6l-1.5-.8c-.2-.1-.4 0-.6.2l-.5.6c-.1.1-.3.2-.5.1-.9-.4-1.8-1.2-2.3-2.1-.1-.2 0-.3.1-.5l.4-.5c.1-.2.2-.4.1-.6l-.6-1.5c-.1-.3-.3-.4-.6-.4z"
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
