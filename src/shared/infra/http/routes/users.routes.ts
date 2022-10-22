import { Router } from "express";
import { CreateUserController } from "@app/modules/accounts/controllers/create-user-controller";
import { GetUsersController } from "@app/modules/accounts/controllers/get-users-controller";

const userRoutes = Router();

const createUserController = new CreateUserController();
const getUsersController = new GetUsersController();

userRoutes.get("/", getUsersController.handle);
userRoutes.post("/", createUserController.handle);

export { userRoutes };
