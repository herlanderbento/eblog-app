import { container } from "tsyringe";
import { IUserRepository } from "@app/modules/accounts/repositories/implementations/IUserRepository";
import { UsersRepository } from "@app/modules/accounts/repositories/UsersRepository";
import { PostRepository } from "@app/modules/posts/repositories/PostRepository";
import { IPostRepository } from "@app/modules/posts/repositories/implementations/IPostRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPostRepository>("PostRepository", PostRepository);
