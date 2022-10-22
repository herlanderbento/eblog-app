import { ICreateUserDtos } from "../../dtos/create-user-dtos";
import { User } from "../../entities/User";

export interface IUserRepository {
  create(data: ICreateUserDtos): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findAll(): Promise<User[]>;
}
