import { Post } from "./post";
import { UserId } from "./user-id";

export interface Theme {
  subscribers: string[];
  posts: any;//string[] | Post[];
  _id: '5fa64a9f2183ce1728ff371a';
  themeName: string;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: number;
}
