import { Request, Response } from "express";
import Movie from "../models/Movie";
import { movie } from "../@types/movieTypes";

const httpCreateMovie = async (req: Request, res: Response) => {
  try {
    const newMovie: movie = (await Movie.create(req.body)) as movie;
    res.status(201).json({
      status: "Success",
      data: {
        newMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      Error: err,
    });
  }
};
const httpGetMovies = async (req: Request, res: Response) => {
  const movie = await Movie.find();

  res
    .status(200)
    .json({ message: "success", numberOfMovies: movie.length, data: movie });
};

export { httpCreateMovie, httpGetMovies };
