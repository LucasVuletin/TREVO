function SectionHeading({ eyebrow, title, description, align = "left", invert = false }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const color = invert ? "text-white/75" : "text-ink-soft";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span
          className={`eyebrow ${invert ? "border-white/20 bg-white/10 text-mint" : "border-line bg-white/75 text-forest"}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-4">
        <h2 className={`font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl ${invert ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
        {description ? <p className={`max-w-2xl text-base leading-7 sm:text-lg ${color}`}>{description}</p> : null}
      </div>
    </div>
  );
}

export default SectionHeading;
