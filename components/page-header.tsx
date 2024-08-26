'use client'

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Emoji } from "./emoji";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
  description?: React.ReactNode;
  onBack?: () => void;
  position?: "top" | "transparent-top" | "inline";
  centered?: boolean;
  size?: "sm" | "md" | "lg";
}

export function PageHeader({
  title,
  description,
  onBack,
  position = "inline",
  centered,
  size = "md",
}: PageHeaderProps) {
  const router = useRouter()

  return (
    <div className={cn(
      "flex gap-4 w-full relative mb-2",
      (position === "top" || position === "transparent-top") && "absolute w-full gap-8 top-0 left-0",
      position === "transparent-top" && "bg-transparent",
      position === "top" && "bg-[#0f0f0f]",
      centered && "text-center",
      size === "lg" && "p-8",
      size === "md" && "p-6",
      size === "sm" && "p-4"
    )}>
      <Button
        variant={position === "transparent-top" ? "ghost" : (
          position === "inline" ? "ghost" : "secondary"
        )}
        size="icon"
        onClick={onBack ?? router.back}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">
          { title }
          <Emoji
            name="brazil"
            alt="Brazil flag"
            height={24}
            width={24}
            className="ml-2"
          />
        </h1>
        <span className="opacity-70 font-regular max-w-[250px] mx-auto truncate">{description}</span>
      </div>
      { position === "inline" && (
        <Separator
          className="absolute bottom-2 left-0"
        />
      )}
    </div>
  )
}