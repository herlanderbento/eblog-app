import { inject } from "tsyringe";
import { ICreatePostsDtos } from "../dtos/create-posts.dtos";
import { Posts } from "../entities/Post";
import { IPostRepository } from "../repositories/implementations/IPostRepository";

type IResponse = ICreatePostsDtos;

export class CreatePostsUseCases {
  constructor(
    @inject("PostRepository")
    private postsRepository: IPostRepository
  ) {}

  async execute({
    title,
    slug,
    content,
    images,
    user_id,
  }: IResponse): Promise<Posts> {
    const posts = await this.postsRepository.create({
      title,
      slug,
      content,
      images,
      user_id,
    });


    return posts;
  }
}
