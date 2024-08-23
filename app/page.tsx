'use client'

import { getCumpriments } from "@/utils/getCumpriments";
import { CreatePostForm } from "@/components/form/create-post";
import { Emoji } from "@/components/emoji";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col p-2 text-center items-center pt-14">
        <span className="text-2xl">
          {getCumpriments()}
        </span>
        <h1 className="text-4xl max-w-[688px] text-left font-bold">
          Fala pra gente o que está acontecendo,
          fofoca também é bem vinda
          <Emoji
            name="smile"
            alt="Smile emoji"
          />
          <Emoji
            name="brazil"
            ext="svg"
            alt="Brazil flag"
          />
        </h1>

        <CreatePostForm />
      </div>
    </main>
  );
}
