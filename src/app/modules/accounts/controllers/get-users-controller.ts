import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUsersUseCases } from "../use-cases/get-users-use-cases";

export class GetUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getUsersUseCases = container.resolve(GetUsersUseCases);

    const users = await getUsersUseCases.execute();

    return response.json(users);
  }
}
