import { ICreateUserDtos } from "../../dtos/create-user-dtos";
import { Users } from "../../entities/User";

export interface IUserRepository {
  create(data: ICreateUserDtos): Promise<Users>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
  findAll(): Promise<Users[]>;
}
