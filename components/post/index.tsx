import { HeartIcon, MessageCircle, UserIcon } from "lucide-react";
import { Button } from "../ui/button";

interface PostProps {
  username: string;
  text: string;
  likes: number;
  comments: number;
  profilePic?: string;
}

export function Post({
  text,
  likes,
  comments,
}: PostProps) {
  return (
    <div className="flex justify-center items-start w-full max-w-[800px] flex-wrap space-x-6 bg-[#111] p-4">
      <Button
        size="icon"
        variant="secondary"
        className="w-16 h-16 rounded-full"
      >
        <UserIcon className="w-6 h-6" />
      </Button>

      <div className="flex-1 mt-1">
        <span className="text-secondary-foreground">
          {text}
        </span>

        <div className="flex flex-wrap space-x-2 mt-2">
          <Button
            variant="secondary"
            className="flex space-x-2"
            size="sm"
          >
            <HeartIcon className="h-5 w-5" />
            <span>{likes}</span>
          </Button>
          <Button
            variant="secondary"
            className="flex space-x-2"
            size="sm"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}