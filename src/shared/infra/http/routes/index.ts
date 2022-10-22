import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/session", authenticateRoutes);
router.use("/users", userRoutes);

export { router };
