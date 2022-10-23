import { ICreatePostsDtos } from "../../dtos/create-posts.dtos";
import { Posts } from "../../entities/Post";

export interface IPostRepository {
  create(data: ICreatePostsDtos): Promise<Posts>;
}
