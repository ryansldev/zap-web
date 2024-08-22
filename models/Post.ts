import { User } from "./User";

export interface Post {
  id: string;
  text: string;
  authorId: string;
  parentId?: string;
  likedBy?: User[];
}