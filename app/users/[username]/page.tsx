import { api } from "@/lib/api"
import { UserPageHeader } from "./_components/header"
import { cookies } from "next/headers"
import { User } from "@/models/User"
import { Post as PostType } from "@/models/Post"
import { Post } from "@/components/post"
import { PostPagination } from "@/components/post/post-pagination"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface UserPageProps {
  params: {
    username: string
  },
  searchParams: {
    page?: number;
  }
}

export  default async function UserPage({ params, searchParams }: UserPageProps) {
  const page = Number(searchParams.page ?? 1)
  const { username } = params

  const loggedUsername = cookies().get('username')?.value
  const access_token = cookies().get('access_token')?.value
  const userIsAuthenticated = !!loggedUsername && !!access_token

  const { data: user } = await api.get<User>(`/users/${username}`, {
    headers: {
      cookie: `access_token=${access_token}`
    }
  })

  const { data: posts } = await api.get<PostType[]>('/posts', {
    headers: {
      cookie: `access_token=${access_token}`
    },
    params: {
      authorId: user.id,
      limit: userIsAuthenticated ? 25 : 5,
      page: userIsAuthenticated ? page : 1,
    }
  })

  return (
    <div>
      <div className="flex flex-col w-full max-w-[800px] mx-auto px-4 pt-16">
        <UserPageHeader user={user} />

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
      </div>
    </div>
  )
}