import { Post } from "./Post";

export interface User {
  id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  profile_pic?: string;
  liked?: Post[]
  posted?: Post[]
  createdAt: Date;
  updatedAt: Date;
}