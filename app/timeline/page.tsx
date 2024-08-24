import { api } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { Post } from "@/components/post";
import { Post as PostType } from "@/models/Post";
import { CreatePostForm } from "@/components/form/create-post";
import { cookies } from "next/headers";

export default async function Timeline() {
  const { data: posts } = await api.get<PostType[]>('/posts', {
    headers: {
      cookie: `access_token=${cookies().get('access_token')?.value}`
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
            username={post.authorId}
            text={post.text}
            likes={post.likedBy ? post.likedBy.length : 0}
            comments={0}
          />
        ))}

        <div className="fixed bottom-0 pb-8 bg-gradient-to-t from-black w-full">
          <div className="max-w-[700px] mx-auto">
            <CreatePostForm />
          </div>
        </div>
      </div>
    </div>
  )
}