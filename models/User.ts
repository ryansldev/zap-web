import { Post } from "./Post";

export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  profile_pic?: string;
  liked?: Post[]
  posted?: Post[]
  createdAt: Date;
  updatedAt: Date;
}