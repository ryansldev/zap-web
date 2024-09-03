'use client'

import { Emoji } from "@/components/emoji";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserAvatar } from "@/components/user-avatar";
import { User } from "@/models/User";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface UserPageHeaderProps {
  user: User
}

export function UserPageHeader({ user }: UserPageHeaderProps) {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <UserAvatar username={user.username} />
        <div className="flex flex-col">
          <span className="text-[18px] font-bold">
            {user.name} {user.lastname}
            <Emoji
              name="brazil"
              alt="Brazil flag"
              height={24}
              width={24}
              ext="svg"
              className="ml-2"
            />
          </span>
          <span className="text-[14px] text-secondary-foreground">@{user.username}</span>
        </div>
      </div>

      <Separator className="mt-6 mb-4" />
    </>
  )
}