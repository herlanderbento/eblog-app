import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";
import { ICreateUserDtos } from "../dtos/create-user-dtos";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/implementations/IUserRepository";
import { createUsersSchemaValidate } from "../validations/account-validations";

@injectable()
export class CreateUserUseCases {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, password }: ICreateUserDtos): Promise<User> {
    if (!(await createUsersSchemaValidate.isValid({ name, email, password }))) {
      throw new AppError("Validation fails", 422);
    }

    const usersAlreadyExists = await this.userRepository.findByEmail(email);

    if (usersAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}
