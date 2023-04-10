import { Schema, model } from "mongoose";
interface IAwards {
  wins: number;
  nominations: number;
  text: String;
}
interface IMovie {
  title: String;
  genre: [String];
  runtime: number;
  cast: [String];
  poster: String;
  plot: String;
  languages: [String];
  released: Date;
  directors: [String];
  rated: String;
  awards: IAwards;
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [String];
  tomatoes: {
    viewer: { rating: number; numRevies: number; meter: number };
    fresh: number;
  };
  critic: { rating: number; numViewer: number; meter: number };
  rotten: number;
  lastUpdated: Date;
}

const movieSchema = new Schema<IMovie>({});

const movie = model("Movie", movieSchema);

export default movie;
