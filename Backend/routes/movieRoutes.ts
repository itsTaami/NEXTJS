import { Router } from "express";
import { getMovies, getMovie } from "../controller/moviesController";

const router = Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);

export default router;
