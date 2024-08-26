import { User } from "./User";

export interface Post {
  id: string;
  text: string;
  authorId: string;
  author: User;
  parentId?: string;
  likedBy?: User[];
}