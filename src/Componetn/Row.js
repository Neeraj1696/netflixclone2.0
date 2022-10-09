import axios from "../axios";
import "../App.css";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movie);
  return (
    <>
      <div className="row ml-1">
        <h1 className="font-bold text-lg pt-2 pb-2">{title}</h1>
        <div className="row__posters flex overflow-y-hidden overflow-x-scroll  ">
          {movie.map((movie) => (
            <img
              className={`row__poster ${
                isLargeRow && "row__posterLargre"
              } max-h-48 object-contain mr-4 rounded-sm hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
