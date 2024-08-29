import { CreatePostForm } from "@/components/form/create-post";
import { PageHeader } from "@/components/page-header";
import { Post } from "@/components/post";
import { PostPagination } from "@/components/post/post-pagination";
import { api } from "@/lib/api";
import { Post as PostType } from "@/models/Post";
import { cookies } from "next/headers";

interface PostDetailsProps {
  params: {
    postId: string;
  }
  searchParams: {
    page?: number;
  }
}

export default async function PostDetails({
  params,
  searchParams,
}: PostDetailsProps) {
  const page = Number(searchParams.page ?? 1)

  const username = cookies().get('username')?.value
  const access_token = cookies().get('access_token')?.value
  const userIsAuthenticated = !!username && !!access_token
  
  const { data: post } = await api.get<PostType>(`/posts/${params.postId}`, {
    headers: {
      cookie: `access_token=${access_token}`
    }
  })

  const { data: comments } = await api.get<PostType[]>(`/posts/${params.postId}/comments`, {
    headers: {
      cookie: `access_token=${access_token}`
    },
    params: {
      limit: userIsAuthenticated ? 25 : 5,
      page: userIsAuthenticated ? page : 1,
    }
  })

  return (
    <div className="px-4">
      <div className="w-full max-w-[800px] mx-auto">
        <PageHeader
          title={`@${post.author.username}${comments.length > 1 ? ` +${comments.length} outros` : ''}`}
          description={post.text}
          centered
        />

        <div className="w-full flex flex-col items-center justify-center">
          <Post
            post={post}
            alreadyHasLikedPost={!!(post.likedBy?.find((user) => user.username === username))}
            isOwner={post.author.username === username}
            comments={comments.length}
            userIsAuthenticated={userIsAuthenticated}
          />

          <div className="pl-8 w-full">
            <CreatePostForm
              parentId={params.postId}
              disabled={!access_token || !username}
            />

            <div className="flex flex-col items-center justify-center space-y-4 mt-8">
              {comments && comments.map((comment) => (
                <Post
                  key={comment.id}
                  post={comment}
                  alreadyHasLikedPost={!!(comment.likedBy && comment.likedBy.find((user) => user.username === username))}
                  isOwner={comment.author.username === username}
                  userIsAuthenticated={userIsAuthenticated}
                />
              ))}

              <PostPagination page={Number(page) ?? 1} notFound={comments.length === 0} type="COMMENT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
