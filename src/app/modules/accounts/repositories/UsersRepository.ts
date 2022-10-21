import { Repository } from "typeorm";
import { connection } from "@shared/infra/typeorm/ormconfig";
import { ICreateUserDtos } from "../dtos/create-user-dtos";
import { User } from "../entities/User";
import { IUserRepository } from "./implementations/IUserRepository";

export class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = connection.getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDtos): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });

    return user;
  }
}
