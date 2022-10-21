import { Router } from "express";

import { userRoutes } from "./users.routes";

const router = Router();

router.use("/users", userRoutes);

export { router };
