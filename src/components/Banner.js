import React, { useEffect, useState } from "react";
import instence from "../axios";
import requests from "../requests";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await instence.get(requests.netflixOriginals);
      // get random index value
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length
      );

      // get random item
      const item = request.data.results[randomIndex];
      setMovie(item);
      return request;
    }
    fetchMovie();
  }, []);
  console.log(movie);
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(180deg, #0505055e, #111),url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button>play</button>
          <button>my list</button>
        </div>
        <p>{truncateString(movie?.overview, 150)}</p>

        <div className="footbar__fade"></div>
      </div>
    </div>
  );
};

export default Banner;
