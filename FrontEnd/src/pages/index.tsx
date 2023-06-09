import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Pagination from "../component/pagination";
import NavBar from "@/component/navbar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Movies from "@/component/movies";

const inter = Inter({ subsets: ["latin"] });
interface IAwards {
  wins: number;
  nominations: number;
  text: String;
}
interface IMovie {
  _id: string;
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

interface IMovies {
  movies: IMovie[];
  pagination: any;
}

export default function Home({ movies, pagination }: IMovies) {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const pages = [1, 2, 3, 4, 5, 6];
  const [cur, setCur] = useState<number>(1);
  const handlePagination = (action: string) => {
    if (action === "next") {
      router.replace(`?limit=6&page=${pagination.page + 1}`);
    } else {
      router.replace(`?limit=6&page=${pagination.page - 1}`);
    }
  };
  // const [movies, setMovies] = useState<IMovie[]>([]);

  // const getMovies = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8005/movies");
  //     const data = res.json();
  //   } catch (error) {}
  // };
  // useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-violet-900  ">
        <NavBar setFilter={setFilter} />
        <h1 className="text-white container mx-auto font-bold text-center text-9xl pt-28">
          Welcome Movie Review List
        </h1>
        <div className=" ">
          <Movies movies={movies} filter={filter} />
        </div>
        <div className="flex justify-center my-10">
          <Pagination
            pages={pages}
            cur={pagination.page}
            nextPage={() => {
              handlePagination("next");
            }}
            prevPage={() => {
              handlePagination("prev");
            }}
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const { page, limit } = ctx.query;
  const res = await fetch(
    `http://localhost:8005/movies?limit=${limit || 20}&page=${page || 1}`
  );
  const data = await res.json();
  console.log("============>", data);

  return {
    props: { movies: data.movies, pagination: data.pagination },
  };
}
