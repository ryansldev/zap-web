import { api } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Post } from "@/components/post";
import { Post as PostType } from "@/models/Post";
import { CreatePostForm } from "@/components/form/create-post";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PostPagination } from "@/components/post/post-pagination";

interface TimelineProps {
  searchParams: {
    page?: number;
  }
}

export default async function Timeline({ searchParams }: TimelineProps) {
  const page = Number(searchParams.page ?? 1)
  
  const username = cookies().get('username')?.value
  const access_token = cookies().get('access_token')?.value
  const userIsAuthenticated = !!username && !!access_token
  
  const { data: posts } = await api.get<PostType[]>("/posts", {
    headers: {
      cookie: `access_token=${access_token}`,
    },
    params: {
      limit: userIsAuthenticated ? 25 : 5,
      page: userIsAuthenticated ? page : 1,
    }
  })

  return (
    <div>
      <PageHeader
        title="Timeline"
        centered
      />

      <div className="flex flex-col items-center justify-center space-y-4 pb-[150px]">
        {posts && posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            alreadyHasLikedPost={!!(post.likedBy && post.likedBy.find((user) => user.username === username))}
            isOwner={post.author.username === username}
            userIsAuthenticated={userIsAuthenticated}
          />
        ))}

        <PostPagination page={Number(page) ?? 1} notFound={posts.length === 0} />

        {!userIsAuthenticated && (
          <Link href="/login">
            <Button>
              Faça login para ver mais
            </Button>
          </Link>
        )}
      </div>
      <div className="fixed bottom-0 pb-8 bg-gradient-to-t via-black from-black w-full">
        <div className="max-w-[700px] mx-auto">
          <CreatePostForm disabled={!access_token || !username} />
        </div>
      </div>
    </div>
  )
}