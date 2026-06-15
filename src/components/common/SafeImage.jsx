import { memo, useState } from "react";
import { TRAVEL_IMAGES } from "../../utils/images.js";

function SafeImageImpl({
  src,
  alt = "",
  fallback = TRAVEL_IMAGES.fallback,
  className = "",
  showPlaceholder = true,
  ...props
}) {
  const [useFallback, setUseFallback] = useState(!src);
  const [loaded, setLoaded] = useState(false);
  const imgSrc = useFallback ? fallback : src;

  const handleError = () => {
    if (!useFallback) setUseFallback(true);
  };

  return (
    <>
      {showPlaceholder && !loaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={() => setLoaded(true)}
        decoding="async"
        {...props}
      />
    </>
  );
}

function SafeImage(props) {
  const { src, fallback = TRAVEL_IMAGES.fallback } = props;
  return <SafeImageImpl key={`${src || ""}-${fallback}`} {...props} />;
}

export default memo(SafeImage);
