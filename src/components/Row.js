import React, { useEffect, useState } from "react";
import instence from "../axios";
import "./Row.css";
const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await instence.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  console.log(movies);
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              className={`row__poster ${!isLarge && "poster-large"}`}
              src={`${imageBaseUrl}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.title}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Row;
