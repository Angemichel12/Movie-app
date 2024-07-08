import { Router } from "express";
import { movieRoutes } from "./movie.routes";
import { userRoutes } from "./user.routes";

const apiRouter = Router();

apiRouter.use("/movies", movieRoutes);
apiRouter.use("/users", userRoutes);

export default apiRouter;
