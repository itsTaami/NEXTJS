import { Request, Response } from "express";

import Movie from "../model/Movie";

import { Model } from "mongoose";

const getMovies = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const total = await Movie.countDocuments();
  const pageCount = Math.ceil(total / limit);
  const skip = (page - 1) * limit;
  try {
    const movies = await Movie.find({}).skip(skip).limit(limit);
    res.status(200).json({
      message: "All Movies",
      movies,
      pagination: { total, pageCount, page },
    });
  } catch (err) {
    res.status(400).json({
      message: "Movies medeelliig avhad aldaa garlaa",
    });
  }
};
const getMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.status(200).json({ message: "Movie", movie });
  } catch (err) {
    res.status(400).json({
      message: "Movies medeelliig avhad aldaa garlaa",
    });
  }
};

export { getMovies, getMovie };

// const getMovies = async (req: Request, res: Response) => {
//   const limit = Number(req.query.limit) || 10;
//   const page = Number(req.query.page) || 0;

//   const total = await Movie.countDocuments();
//   const pageCount = Math.ceil(total / limit);
//   const skip = (page - 1) * limit;

//   try {
//     const movies = await Movie.find().skip(skip).limit(limit);
//     res.status(200).json({
//       message: "All Movies",
//       movies,
//       pagination: { total, pageCount, page },
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: "Movies medeelliig avhad aldaa garlaa",
//     });
//   }
// };
