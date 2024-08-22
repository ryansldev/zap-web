import { cn } from "@/lib/utils";
import Image from "next/image";

interface EmojiProps {
  alt: string;
  width?: number;
  height?: number;
  name: string;
  ext?: "jpg" | "png" | "svg" | "webp";
  className?: string;
}

export function Emoji({
  alt,
  width,
  height,
  name,
  ext = "png",
  className,
}: EmojiProps) {
  return (
    <span className={cn("inline-block align-middle ml-1", className)}>
      <Image
        src={`/assets/emojis/${name}.${ext}`}
        alt={alt}
        height={height ?? 36}
        width={width ?? 36}
      />
    </span>
  )
}