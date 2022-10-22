import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/implementations/IUserRepository";

@injectable()
export class GetUsersUseCases {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}
