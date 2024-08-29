'use client'

import { Ellipsis, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useAction } from "@/hooks/use-action";
import { deletePost } from "@/actions/delete-post";
import { toast } from "sonner";

interface DropdownActionsProps {
  postId: string;
}

export function DropdownActions({ postId }: DropdownActionsProps) {
  const { execute: executeDeletePost } = useAction(deletePost, {
    onSuccess: () => {
      toast.success('Publicação excluída com sucesso!')
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  async function onDelete() {
    await executeDeletePost({ id: postId })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full text-secondary-foreground"
        >
          <Ellipsis className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onDelete}>
          <TrashIcon className="w-4 h-4 mr-2" />
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}