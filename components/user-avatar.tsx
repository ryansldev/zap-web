import Link from "next/link";
import { Button } from "./ui/button";
import { UserIcon } from "lucide-react";

interface UserAvatarProps {
  username: string;
}

export function UserAvatar({ username }: UserAvatarProps) {
  return (
    <Link href={`/users/${username}`}>
      <Button
        size="icon"
        variant="secondary"
        className="w-16 h-16 rounded-full"
      >
        <UserIcon className="w-6 h-6" />
      </Button>
    </Link>
  )
}