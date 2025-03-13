export default function LogoStatic({ size = 120 }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle cx="100" cy="100" r="90" fill="rgba(16, 185, 129, 0.1)" />

        {/* DNA Helix */}
        <path
          d="M60,40 C90,60 110,40 140,60 C110,80 90,60 60,80 C90,100 110,80 140,100 C110,120 90,100 60,120 C90,140 110,120 140,140 C110,160 90,140 60,160"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* DNA Connections */}
        <path
          d="M60,40 L140,60 M60,80 L140,100 M60,120 L140,140 M60,160 L140,160"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />

        {/* Acceleration Arrow */}
        <path
          d="M100,50 L130,100 L100,150"
          stroke="#22c55e"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* AI Circuit Elements */}
        <path
          d="M80,75 L120,75 M80,100 L120,100 M80,125 L120,125"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Nodes */}
        <circle cx="60" cy="40" r="6" fill="#34d399" />
        <circle cx="140" cy="60" r="6" fill="#34d399" />
        <circle cx="60" cy="80" r="6" fill="#34d399" />
        <circle cx="140" cy="100" r="6" fill="#34d399" />
        <circle cx="60" cy="120" r="6" fill="#34d399" />
        <circle cx="140" cy="140" r="6" fill="#34d399" />
        <circle cx="60" cy="160" r="6" fill="#34d399" />
        <circle cx="140" cy="160" r="6" fill="#34d399" />
      </svg>

      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)",
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
    </div>
  );
}
