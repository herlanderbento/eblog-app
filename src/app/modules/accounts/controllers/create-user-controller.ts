import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCases } from "../use-cases/create-user-use-case";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserUseCases = container.resolve(CreateUserUseCases);

    const user = await createUserUseCases.execute({ name, email, password });

    return response.status(201).json(user);
  }
}
