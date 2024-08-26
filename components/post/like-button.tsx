import { User } from "@/models/User";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { useAction } from "@/hooks/use-action";
import { likePost } from "@/actions/like-post";
import { hasLikedPost } from "@/actions/has-liked-post";
import { useEffect } from "react";

interface LikeButtonProps {
  id: string;
  likedBy: User[];
  alreadyHasLikedPost: boolean;
  className?: string;
}

export function LikeButton({
  id,
  likedBy,
  alreadyHasLikedPost,
  className,
}: LikeButtonProps) {
  const { execute: executeLikePost } = useAction(likePost, {
    onError: (error) => {
      toast.error(error)
    }
  })

  return (
    <Button
      variant="secondary"
      className={cn("flex space-x-2", className, alreadyHasLikedPost && "text-red-500 font-bold")}
      size="sm"
      onClick={async () => await executeLikePost({ id })}
    >
      <HeartIcon
        className={cn("h-5 w-5",
          alreadyHasLikedPost && "fill-red-500 border-red-500"
        )}
      />
      <span>{likedBy.length ?? 0}</span>
    </Button>
  )
}