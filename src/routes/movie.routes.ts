import express from "express";
import {
  httpCreateMovie,
  httpGetMovies,
} from "../controllers/movie.controllers";

const movieRoutes = express.Router();

movieRoutes.post("/", httpCreateMovie);
movieRoutes.get("/", httpGetMovies);

export { movieRoutes };
