import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);
  return (
    <div>
      <header
        className="banner w-full h-96  "
        style={{
          backgroundSize: "cover",

          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="pt-24 pl-28">
          <h1 className="text-white text-4xl font-bold">
            {movie.title || movie?.name || movie?.original_name}
          </h1>
          <button className=" bg-slate-500 pl-2 pr-2 m-2 rounded-sm hover: hover:bg-slate-50 text-black">
            Play
          </button>
          <button className=" bg-slate-500 pl-2 pr-2 m-2 rounded-sm hover: hover:bg-slate-50 text-black">
            My List
          </button>
          <div className="text-white truncate   w-96 ">{movie?.overview}</div>
        </div>
      </header>
    </div>
  );
}

export default Banner;
