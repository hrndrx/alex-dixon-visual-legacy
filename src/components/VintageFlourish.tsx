interface VintageOrnamentProps {
  className?: string;
  variant?: "horizontal" | "corner" | "divider";
}

export const VintageFlourish = ({ className = "", variant = "horizontal" }: VintageOrnamentProps) => {
  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
        <svg
          className="h-3 w-3 text-primary/60"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
        </svg>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <svg
        className={`text-primary/30 ${className}`}
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 40 Q20 20 40 0" />
        <path d="M5 40 Q20 25 40 5" />
        <circle cx="40" cy="0" r="2" fill="currentColor" />
      </svg>
    );
  }

  // Horizontal flourish
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        className="h-6 w-48 text-primary/40"
        viewBox="0 0 200 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {/* Left swirl */}
        <path d="M0 12 Q10 2 30 12 T60 12" />
        <path d="M60 12 Q70 22 80 12" />
        
        {/* Center ornament */}
        <circle cx="100" cy="12" r="3" fill="currentColor" />
        <circle cx="100" cy="12" r="6" strokeWidth="0.5" />
        <path d="M88 12 L94 12 M106 12 L112 12" />
        
        {/* Right swirl */}
        <path d="M120 12 Q130 2 140 12" />
        <path d="M140 12 Q160 22 170 12 T200 12" />
      </svg>
    </div>
  );
};

export const VintageBorder = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {/* Corner ornaments */}
      <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-primary/20" />
      <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-primary/20" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-primary/20" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-primary/20" />
    </div>
  );
};
