import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

interface IProps {
  params: [];
}

function Movie({ movie }: any) {
  const router = useRouter();
  console.log("Movie:", movie);

  if (router.isFallback) {
    return <div>Loading....</div>;
  }
  return (
    // <div className="bg-blue-400 h-full">
    //   <div className="container mx-auto">
    //     <h1 className="text-violet-700 text-4xl"> {movie.title}</h1>
    //     <div className="group">
    //       <Image src={movie.poster} width={300} height={200} alt="poster" />
    //       <p className="text-bold">
    //         {movie.year} : {movie.imdb.rating}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-full w-1/2 mx-auto">
      <div>
        {/* <MyNav /> */}
        <div>
          <Image
            src={movie.moviez.poster}
            width={300}
            height={200}
            alt="poster"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <h5 className="font-semibold border-l-2 pl-2 border-red-400">
          MOVIE INFO
        </h5>
        <p>{movie.moviez.plot}</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <p className="font-bold">Rating:</p>
            <p>{movie.moviez.imdb.rating}</p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Genre:</p>
            {movie.moviez.genres.map((e: string) => (
              <p>{e}</p>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Original Language:</p>
            <p>{movie.moviez.languages}</p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Director:</p>
            {movie.moviez.directors.map((e: string) => (
              <p>{e}</p>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Writer:</p>
            {movie.moviez.writers.map((e: string) => (
              <p>{e}</p>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Release Date:</p>
            <p> {movie.moviez.released}</p>
          </div>
          <div className="flex gap-3">
            <p className="font-bold">Run Time:</p>
            <p> {movie.moviez.runtime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:8000/movies/${query.id}`);

  const data = await res.json();
  console.log("============>", data);

  return {
    props: { movie: data.movie },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   console.log("params", params);
//   const res = await fetch(`http://localhost:8000/movies/${params.id}`);
//   const data = await res.json();

//   return {
//     props: { movie: data.movie },
//   };
// }

// export async function getStaticProps({ query }: any) {
//   console.log("Query:", query);
//   const res = await fetch(`http://localhost:8005/movies/${query.id}`);
//   const data = await res.json();

//   return {
//     props: { movie: data.movie },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   console.log("Params:", params);
//   const res = await fetch(`http://localhost:8005/movies/${params.id}`);
//   const data = await res.json();

//   return {
//     props: { movie: data.movie },
//   };
// }

export default Movie;
