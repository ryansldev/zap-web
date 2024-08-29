'use client'

import { LikeButton } from "./like-button";
import { Post as PostType } from "@/models/Post";
import { CommentButton } from "./comment-button";
import { UserAvatar } from "../user-avatar";
import { DropdownActions } from "./dropdown-actions";

interface PostProps {
  post: PostType;
  isOwner?: boolean;
  alreadyHasLikedPost?: boolean;
  comments?: number;
  userIsAuthenticated?: boolean;
  hiddenAvatar?: boolean;
}

export function Post({
  post,
  isOwner = false,
  alreadyHasLikedPost = false,
  userIsAuthenticated = false,
  comments,
  hiddenAvatar = false,
}: PostProps) {  
  return (
    <div
      className="relative flex justify-center items-start w-full max-w-[800px] flex-wrap space-x-6 bg-[#111] p-4 rounded-lg"
    >
      {!hiddenAvatar && <UserAvatar username={post.author.username} /> }

      <div className="flex-1 mt-1">
        { isOwner &&
          <div className="absolute top-0 right-0">
            <DropdownActions postId={post.id} />
          </div>
        }
        <span className="text-secondary-foreground">
          {post.text}
        </span>

        <div className="flex flex-wrap space-x-2 mt-2">
          <LikeButton
            id={post.id}
            likedBy={post.likedBy ?? []}
            alreadyHasLikedPost={alreadyHasLikedPost}
            disabled={!userIsAuthenticated}
          />
          <CommentButton
            postId={post.id}
            comments={comments}
          />
        </div>
      </div>
    </div>
  )
}