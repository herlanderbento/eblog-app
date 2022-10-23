import { connection } from "@shared/infra/typeorm/ormconfig";
import { Repository } from "typeorm";
import { ICreatePostsDtos } from "../dtos/create-posts.dtos";
import { Posts } from "../entities/Post";
import { IPostRepository } from "./implementations/IPostRepository";

export class PostRepository implements IPostRepository {
  private repository: Repository<Posts>;

  constructor() {
    this.repository = connection.getRepository(Posts);
  }

  async create({
    title,
    slug,
    content,
    images,
    user_id,
  }: ICreatePostsDtos): Promise<Posts> {
    const posts = this.repository.create({
      title,
      slug,
      content,
      images,
      user_id,
    });

    return await this.repository.save(posts);
  }
}
