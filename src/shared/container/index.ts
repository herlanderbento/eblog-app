import { container } from "tsyringe";
import { IUserRepository } from "@app/modules/accounts/repositories/implementations/IUserRepository";
import { UsersRepository } from "@app/modules/accounts/repositories/UsersRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
