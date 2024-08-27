import { api } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Post } from "@/components/post";
import { Post as PostType } from "@/models/Post";
import { CreatePostForm } from "@/components/form/create-post";
import { cookies } from "next/headers";

export default async function Timeline() {
  const username = cookies().get('username')?.value
  const access_token = cookies().get('access_token')?.value
  const { data: posts } = await api.get<PostType[]>('/posts', {
    headers: {
      cookie: `access_token=${access_token}`
    }
  })

  return (
    <div>
      <PageHeader
        title="Timeline"
        centered
      />

      <div className="flex flex-col items-center justify-center space-y-4">
        {posts && posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            alreadyHasLikedPost={!!(post.likedBy && post.likedBy.find((user) => user.username === username))}
            isOwner={post.author.username === username}
          />
        ))}

        <div className="fixed bottom-0 pb-8 bg-gradient-to-t via-black from-black w-full">
          <div className="max-w-[700px] mx-auto">
            <CreatePostForm disabled={!access_token || !username} />
          </div>
        </div>
      </div>
    </div>
  )
}