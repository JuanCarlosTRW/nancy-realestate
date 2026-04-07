import Image from "next/image";

export default function PlaceholderImage({
  src,
  alt,
  className = "",
  fill = true,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  if (fill) {
    return (
      <div className={`relative overflow-hidden bg-bgSection ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={className}
    />
  );
}
