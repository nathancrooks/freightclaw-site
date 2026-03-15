type LogoProps = {
  className?: string;
};

export function ClawCrestMark({ className }: LogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 6L50 14V31C50 41.8 42.8 51.2 32 56C21.2 51.2 14 41.8 14 31V14L32 6Z"
        fill="currentColor"
      />
      <path
        d="M32 15C37.6 15 42 19.5 42 25C42 29 39.7 32.2 36.5 34.1L40.5 42H35L32 36.5L29 42H23.5L27.5 34.1C24.3 32.2 22 29 22 25C22 19.5 26.4 15 32 15Z"
        fill="white"
      />
      <path
        d="M27.5 23.5C24.4 22.8 22.4 21.1 21.5 18.5C24.4 18.2 27 18.9 29.1 21"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M36.5 23.5C39.6 22.8 41.6 21.1 42.5 18.5C39.6 18.2 37 18.9 34.9 21"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M29.5 27.5C29.5 26.1 30.6 25 32 25C33.4 25 34.5 26.1 34.5 27.5C34.5 28.9 33.4 30 32 30C30.6 30 29.5 28.9 29.5 27.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LobsterShieldMark({ className }: LogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="8" width="48" height="48" rx="16" fill="currentColor" />
      <path
        d="M21 19C16.5 16.4 15.1 12.9 15.5 10C19.9 10.3 23.5 12.3 26.5 16.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M43 19C47.5 16.4 48.9 12.9 48.5 10C44.1 10.3 40.5 12.3 37.5 16.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M26 20.5C26 17.2 28.7 14.5 32 14.5C35.3 14.5 38 17.2 38 20.5V28C38 31.3 35.3 34 32 34C28.7 34 26 31.3 26 28V20.5Z"
        fill="white"
      />
      <path
        d="M24.5 37C24.5 33.9 27.9 31.5 32 31.5C36.1 31.5 39.5 33.9 39.5 37C39.5 41.1 36.1 44.5 32 44.5C27.9 44.5 24.5 41.1 24.5 37Z"
        fill="white"
      />
      <path d="M28.5 44.5V53" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M35.5 44.5V53" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 45.5L19.5 53" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 45.5L44.5 53" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MonogramClawMark({ className }: LogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="6" width="52" height="52" rx="14" fill="currentColor" />
      <path d="M20 18H42V24H27V29H39V35H27V46H20V18Z" fill="white" />
      <path
        d="M43.5 18.5C48 18.8 51 21.2 52.5 26C49.5 27 46.9 26.7 44.5 25.1"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M42 25C46.7 25 50.5 28.8 50.5 33.5C50.5 38.2 46.7 42 42 42H35V36H41.2C43.2 36 44.8 34.4 44.8 32.4C44.8 30.4 43.2 28.8 41.2 28.8H35V25H42Z"
        fill="white"
      />
    </svg>
  );
}
