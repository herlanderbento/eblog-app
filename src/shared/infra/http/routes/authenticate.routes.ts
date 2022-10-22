import { AuthenticateUserController } from "@app/modules/accounts/controllers/authenticate-user-controller";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/", authenticateUserController.handle);

export { authenticateRoutes };
