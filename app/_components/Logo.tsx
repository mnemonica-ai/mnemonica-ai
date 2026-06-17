// Logo with the screen-blend + circular-mask treatment so the dark square
// dissolves over the #0a0612 background. Plain <img> on purpose: mix-blend-mode
// + mask-image apply directly to the element, swap for a transparent
// PNG/SVG later to drop the blend hack.
type Props = {
  size: number | string;
  radius: number;
  glow?: boolean; // hero variant: drop-shadow + glowPulse, wrapper floats
};

export function Logo({ size, radius, glow = false }: Props) {
  const px = typeof size === "number" ? `${size}px` : size;
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.jpg"
      alt="mnemonica.ai logo"
      width={typeof size === "number" ? size : undefined}
      height={typeof size === "number" ? size : undefined}
      className={glow ? "animate-glow-pulse" : undefined}
      style={{
        width: px,
        height: px,
        borderRadius: radius,
        mixBlendMode: "screen",
        WebkitMaskImage:
          "radial-gradient(circle at 50% 50%, #000 56%, transparent 74%)",
        maskImage:
          "radial-gradient(circle at 50% 50%, #000 56%, transparent 74%)",
        filter: glow
          ? "drop-shadow(0 0 26px rgba(124,92,246,0.6))"
          : undefined,
      }}
    />
  );

  return glow ? <span className="animate-float-slow inline-block">{img}</span> : img;
}
