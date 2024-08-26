'use client'

import { MessageCircle, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { LikeButton } from "./like-button";
import { Post as PostType } from "@/models/Post";

interface PostProps {
  post: PostType;
  alreadyHasLikedPost: boolean;
}

export function Post({ post, alreadyHasLikedPost }: PostProps) {
  return (
    <div className="flex justify-center items-start w-full max-w-[800px] flex-wrap space-x-6 bg-[#111] p-4">
      <Button
        size="icon"
        variant="secondary"
        className="w-16 h-16 rounded-full"
      >
        <UserIcon className="w-6 h-6" />
      </Button>

      <div className="flex-1 mt-1">
        <span className="text-secondary-foreground">
          {post.text}
        </span>

        <div className="flex flex-wrap space-x-2 mt-2">
          <LikeButton
            id={post.id}
            likedBy={post.likedBy ?? []}
            alreadyHasLikedPost={alreadyHasLikedPost}
          />
          <Button
            variant="secondary"
            className="flex space-x-2"
            size="sm"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}