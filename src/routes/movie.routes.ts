import express from "express";
import {
  httpCreateMovie,
  httpGetMovies,httpUpdateMovies, httpDeleteMovies
} from "../controllers/movie.controllers";

const movieRoutes = express.Router();

movieRoutes.post("/", httpCreateMovie);
movieRoutes.get("/", httpGetMovies);
movieRoutes.patch("/:id", httpUpdateMovies);
movieRoutes.delete("/:id", httpDeleteMovies);

export { movieRoutes };
