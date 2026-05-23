import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  priority = false,
  className = "",
  imageClassName = "object-top",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <div className="absolute inset-0 w-full h-full origin-center scale-[1.04]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${imageClassName}`}
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none transition-colors duration-500 group-hover:bg-black/[0.02]" />
      </div>
    </div>
  );
}
