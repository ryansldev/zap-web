'use client'

import { PageHeader } from "@/components/page-header";
import { Post } from "@/components/post";

export default function Timeline() {  
  return (
    <div>
      <PageHeader
        title="Timeline"
        centered
      />

      <div className="flex items-center justify-center flex-wrap">
        <Post
          username="johndoe"
          text="Minha vizinha é doida de pedra!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend, dolor elementum ullamcorper semper, ex nibh."
          likes={12}
          comments={4}
        />
      </div>
    </div>
  )
}