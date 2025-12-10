import React from "react";

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
    className={`w-8 h-8 text-primary ${props.className || ""}`}
  >
    <path
      fill="currentColor"
      d="M216,48H40A24,24,0,0,0,16,72V200a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V72A24,24,0,0,0,216,48Zm-84.69,94.69a8,8,0,0,1-11.32,0L73.37,96H96a8,8,0,0,1,0,16H56a8,8,0,0,1-5.66-13.66l56-56a8,8,0,0,1,11.32,0l56,56A8,8,0,0,1,176,112H160a8,8,0,0,1,0-16h22.63Z"
    />
    <path
      fill="currentColor"
      d="M182.63,96,128,41.37,73.37,96H96a8,8,0,0,1,0,16H56a8,8,0,0,1-5.66-13.66l56-56a8,8,0,0,1,11.32,0l56,56A8,8,0,0,1,176,112H160a8,8,0,0,1,0-16Z"
      opacity="0.2"
    />
  </svg>
);

export const HerbalPowderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 12c-3 0-5 2.5-5 5" />
    <path d="M12 12c3 0 5 2.5 5 5" />
    <path d="M12 12c0-3-2.5-5-5-5" />
    <path d="M12 12c0-3 2.5-5 5-5" />
  </svg>
);

export const SmoothieIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 22h14" />
    <path d="M5 22a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4" />
    <path d="M8 12s.5-1 2-1 2 1 2 1" />
    <path d="M12 12s.5-1 2-1 2 1 2 1" />
    <path d="M8 8s.5-1 2-1 2 1 2 1" />
  </svg>
);

export const CowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.8 8.02A6.4 6.4 0 0 0 12 4a6.4 6.4 0 0 0-6.8 4.02" />
    <path d="M12 20.5a9.5 9.5 0 0 0 7.1-3.22" />
    <path d="M4.9 17.28A9.5 9.5 0 0 0 12 20.5" />
    <path d="M14 13h.01" />
    <path d="M10 13h.01" />
    <path d="M12 16a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2Z" />
    <path d="M17 11a1.5 1.5 0 0 1 2.8.74c-.1.96-1 1.26-1.4 2.26" />
    <path d="M7 11a1.5 1.5 0 0 0-2.8.74c.1.96 1 1.26 1.4 2.26" />
  </svg>
);

export const PickleJarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 10h14" />
    <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
    <path d="M8 4h8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4z" />
    <path d="M9 14h6" />
  </svg>
);

export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    {/* WhatsApp logo - speech bubble with phone */}
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
