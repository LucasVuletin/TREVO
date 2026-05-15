import { useId } from "react";

function TrevoLogo({ showSubtitle = true, theme = "light", compact = false }) {
  return (
    <div className={`flex items-center ${compact ? "gap-3" : "gap-3.5"}`}>
      <TrevoMark theme={theme} size={compact ? "sm" : "md"} />
      <TrevoWordmark theme={theme} showSubtitle={showSubtitle} compact={compact} />
    </div>
  );
}

function TrevoWordmark({ theme = "light", showSubtitle = true, compact = false }) {
  const gradientId = useId();
  const shadowId = useId();
  const light = theme === "light";
  const mainColor = light ? "#061926" : "#ffffff";
  const taglineColor = light ? "#061926" : "rgba(255,255,255,0.78)";
  const shadowOpacity = light ? "0.18" : "0.08";

  const subtitle = "SOLUCIONES DIGITALES PARA EMPRESAS";
  const subtitleFontSize = compact ? 32 : 27;
  const subtitleY = compact ? 322 : 318;
  const viewBox = showSubtitle ? "0 0 1200 420" : "70 52 1065 220";
  const svgHeightClass = showSubtitle ? (compact ? "h-16 sm:h-[4.7rem]" : "h-[4.7rem]") : compact ? "h-12" : "h-14";

  return (
    <svg
      className={`${svgHeightClass} w-auto`}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
      aria-label="TREVO - Soluciones digitales para pymes"
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#08c79f" />
          <stop offset="100%" stopColor="#009b80" />
        </linearGradient>

        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="2.5"
            floodColor="#000000"
            floodOpacity={shadowOpacity}
          />
        </filter>
      </defs>

      <g
        style={{
          fontFamily: "Montserrat, Manrope, Arial, sans-serif",
          fontWeight: 900,
          fontSize: 215,
          letterSpacing: 8,
          fill: mainColor,
          filter: `url(#${shadowId})`,
        }}
      >
        <text x="85" y="245">T</text>
        <text x="300" y="245">R</text>
        <text x="695" y="245">V</text>
        <text x="905" y="245">O</text>
      </g>

      <g fill={`url(#${gradientId})`} filter={`url(#${shadowId})`}>
        <rect x="510" y="95" width="130" height="28" rx="8" />
        <rect x="510" y="159" width="130" height="28" rx="8" />
        <rect x="510" y="220" width="130" height="28" rx="8" />
      </g>

      {showSubtitle ? (
        <text
          x="85"
          y={subtitleY}
          textLength="1040"
          lengthAdjust="spacing"
          style={{
            fontFamily: "Montserrat, Manrope, Arial, sans-serif",
            fontSize: subtitleFontSize,
            fontWeight: 500,
            fill: taglineColor,
          }}
        >
          {subtitle}
        </text>
      ) : null}
    </svg>
  );
}

function TrevoMark({ theme = "light", size = "md" }) {
  const dimension = size === "sm" ? "h-12 w-12" : "h-14 w-14";
  const iconSize = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const border = theme === "light" ? "border-forest/10" : "border-white/20";

  return (
    <div className={`flex shrink-0 items-center justify-center rounded-full border bg-white ${border} ${dimension}`}>
      <img src="/icono.png" className={`${iconSize} object-contain`} alt="Trevo Icon" />
    </div>
  );
}

export { TrevoMark, TrevoWordmark };
export default TrevoLogo;
