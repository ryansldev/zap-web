import Link from "next/link";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import { useAction } from "@/hooks/use-action";
import { getPostCommentsCount } from "@/actions/get-post-comments-count";
import { toast } from "sonner";
import { useEffect } from "react";

interface CommentButtonProps {
  postId: string;
  comments?: number;
}

export function CommentButton({ postId, comments }: CommentButtonProps) {
  const { execute, data } = useAction(getPostCommentsCount, {
    onError: (error) => {
      toast.error(error)
    }
  })

  useEffect(() => {
    async function getCommentsCount() {
      await execute({ id: postId })
    }

    getCommentsCount()
  }, [])

  return (
    <Link href={`/timeline/${postId}`}>
      <Button
        variant="secondary"
        className="flex space-x-2 "
        size="sm"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{comments ? comments : (data?.count ?? 0)}</span>
      </Button>
    </Link>
  )
}