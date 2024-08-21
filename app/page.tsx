'use client'
import { FormButton } from "@/components/form/form-button";
import { FormInput } from "@/components/form/form-input";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";

export default function Home() {
  function getCumpriments(): "Bom dia!" | "Boa tarde!" | "Boa noite!" {
    const now = new Date()
    const hours = now.getHours()

    if (hours >= 5 && hours < 12) {
      return "Bom dia!";
    } else if (hours >= 12 && hours < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  }

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

        <form>
          <div className="flex items-center relative min-w-[700px]">
            <FormInput
              name="text"
              type="text"
              placeholder="O que está acontecendo?"
              className="h-20 rounded-full text-[18px] px-8"
            />

            <FormButton
              size="icon"
              className="absolute right-7 rounded-lg h-12 w-12"
            >
              <SendHorizonal className="h-6 w-6" />
            </FormButton>
          </div>
        </form>
      </div>
    </main>
  );
}
