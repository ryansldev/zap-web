import { CreatePostForm } from "@/components/form/create-post";
import { PageHeader } from "@/components/page-header";
import { Post } from "@/components/post";
import { api } from "@/lib/api";
import { Post as PostType } from "@/models/Post";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

interface PostDetailsProps {
  params: {
    postId: string;
  }
}

export default async function PostDetails({
  params,
}: PostDetailsProps) {
  const username = cookies().get('username')?.value
  const access_token = cookies().get('access_token')?.value
  
  const { data: post } = await api.get<PostType>(`/posts/${params.postId}`, {
    headers: {
      cookie: `access_token=${access_token}`
    }
  })

  const { data: comments } = await api.get<PostType[]>(`/posts/${params.postId}/comments`, {
    headers: {
      cookie: `access_token=${access_token}`
    }
  })

  return (
    <div className="px-4">
      <div className="w-full max-w-[800px] mx-auto">
        <PageHeader
          title={`@${post.author.username}${comments.length > 1 ? ` +${comments.length} outros` : ''}`}
          description={`${post.text}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`}
          centered
        />

        <div className="w-full flex flex-col items-center justify-center">
          <Post
            post={post}
            alreadyHasLikedPost={!!(post.likedBy?.find((user) => user.username === username))}
            isOwner={post.author.username === username}
          />

          <div className="pl-8 w-full">
            <CreatePostForm parentId={params.postId} />

            <div className="flex flex-col items-center justify-center space-y-4 mt-8">
              {comments.map((comment) => (
                <Post
                  key={comment.id}
                  post={comment}
                  alreadyHasLikedPost={!!(comment.likedBy && comment.likedBy.find((user) => user.username === username))}
                  isOwner={comment.author.username === username}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
