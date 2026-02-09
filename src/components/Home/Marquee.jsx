export default function Marquee({ children, speed = "slow" }) {
  const animation =
    speed === "fast" ? "animate-marquee-fast" : "animate-marquee";

  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex gap-8 w-max ${animation}`}>
        {children}
        {children}
      </div>
    </div>
  );
}
