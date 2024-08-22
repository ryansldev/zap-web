import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Emoji } from "./emoji";
import { cn } from "@/lib/utils";

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
  return (
    <div className={cn(
      "flex gap-4",
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
        onClick={onBack}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <div className="flex flex-col space-y-2 w-full">
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
        <span className="opacity-70 font-regular">{description}</span>
      </div>
    </div>
  )
}