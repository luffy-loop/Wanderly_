import { memo } from "react";

function Skeleton({ className = "", variant = "rect" }) {
  const base = "animate-pulse bg-slate-200";
  const shapes = {
    rect: "rounded-xl",
    circle: "rounded-full",
    text: "rounded h-4",
  };

  return <div className={`${base} ${shapes[variant]} ${className}`} aria-hidden="true" />;
}

function SkeletonCard() {
  return (
    <div className="card-premium p-6 space-y-4" aria-busy="true" aria-label="Loading content">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-5 w-3/4" variant="text" />
      <Skeleton className="h-4 w-1/2" variant="text" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
}

function SkeletonList({ count = 3 }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="status" aria-label="Loading results">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default memo(Skeleton);
export { SkeletonCard, SkeletonList };
