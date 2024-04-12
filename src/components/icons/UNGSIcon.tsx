export function UNGSIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      className="duration-200 transition-all"
    >
      <defs>
        <radialGradient id="emeraldGradient" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        d="M95.9335 211.809L134.15 30.6204C134.988 26.6456 131.709 23.0075 127.701 23.672C66.5914 33.8041 20 86.8042 20 150.664C20 214.245 66.1846 267.061 126.9 277.521C129.966 278.05 132.849 276.007 133.513 272.967L175.844 79.1703C176.88 75.4081 181.834 68.5288 193.367 71.1086C204.9 73.6883 205.049 83.8419 203.682 88.5962L165.324 270.457C164.48 274.46 167.809 278.11 171.836 277.392C232.188 266.633 278 213.988 278 150.664C278 87.5812 232.535 35.0953 172.523 24.0608C169.438 23.4936 166.517 25.5401 165.848 28.6041L123.772 221.235C122.736 224.997 117.782 231.877 106.249 229.297C94.7156 226.717 94.5665 216.563 95.9335 211.809Z"
        fill=""
        className="fill-neutral-900/50"
        stroke="url(#emeraldGradient)"
        strokeWidth="2"
      />
    </svg>
  );
}
