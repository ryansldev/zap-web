'use client'
import Image from "next/image";
import { getCumpriments } from "@/utils/getCumpriments";
import { CreatePostForm } from "@/components/form/create-post";

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
          <span className="inline-block align-middle ml-2">
            <Image src="/assets/emojis/smile.png" alt="Smile emoji" height={36} width={36} quality={100} />
          </span>
          <span className="inline-block align-middle ml-1">
            <Image src="/assets/emojis/brazil.svg" alt="Brazil flag emoji" height={36} width={36} quality={100} />
          </span>
        </h1>

        <CreatePostForm />
      </div>
    </main>
  );
}
