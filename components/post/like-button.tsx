import { User } from "@/models/User";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { useAction } from "@/hooks/use-action";
import { likePost } from "@/actions/like-post";
import { dislikePost } from "@/actions/dislike-post";

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

  const { execute: executeDislikePost } = useAction(dislikePost, {
    onError: (error) => {
      toast.error(error)
    }
  })

  async function onClick() {
    alreadyHasLikedPost ? await executeDislikePost({ id }) : await executeLikePost({ id })
  }

  return (
    <Button
      variant="secondary"
      className={cn("flex space-x-2", className, alreadyHasLikedPost && "text-red-500 font-bold")}
      size="sm"
      onClick={onClick}
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