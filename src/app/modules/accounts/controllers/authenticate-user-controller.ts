import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCases } from "../use-cases/authenticate-user-use-cases";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCases = container.resolve(
      AuthenticateUserUseCases
    );

    const authenticateInfo = await authenticateUserUseCases.execute({
      email,
      password,
    });

    return response.json(authenticateInfo);
  }
}
