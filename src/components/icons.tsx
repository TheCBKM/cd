import React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
    className={`w-8 h-8 text-primary ${props.className || ''}`}
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.44,11.33A9.77,9.77,0,0,0,12.06,2.05,9.82,9.82,0,0,0,2.28,11.63c0,2.15.88,4.2,2.39,5.74L2.5,22l4.89-2.1A9.74,9.74,0,0,0,12,22h.06a9.82,9.82,0,0,0,9.44-10.38,9.75,9.75,0,0,0-.06-.33Z" />
      <path d="M17.38,14.34a2,2,0,0,1-1.33.68h-.12c-.22,0-.43-.05-.63-.16s-.4-.27-.61-.46l-.3-.23c-.7-.52-1.34-1.2-1.9-2s-1-1.46-1.32-2.18a3.49,3.49,0,0,1-.13-1.12,1.38,1.38,0,0,1,.5-1.11,1.15,1.15,0,0,1,.8-.33,1,1,0,0,1,.45.08.76.76,0,0,1,.33.24s.19.2.29.38.16.35.2.49c.07.14.07.28,0,.42s-.13.27-.26.42-.27.26-.41.36-.29.17-.43.25a.8.8,0,0,0-.29.3.93.93,0,0,0-.1.41c0,.09,0,.19.06.28s.1.19.16.29a3.2,3.2,0,0,0,.4.59,4.92,4.92,0,0,0,1.38,1.3,3.7,3.7,0,0,0,.56.32c.1.06.2.1.3.13a.9.9,0,0,0,.41.05.91.91,0,0,0,.45-.25,4.3,4.3,0,0,0,.41-.5.37.37,0,0,1,.48-.15c.16,0,.32.05.47.09a2.4,2.4,0,0,1,.47.16,1.4,1.4,0,0,1,.56.41.92.92,0,0,1,.19.67Z" />
    </svg>
  );
