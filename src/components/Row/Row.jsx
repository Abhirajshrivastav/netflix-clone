import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../Banner/axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [Movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {Movies.map((Movie) => (
           (( isLargeRow && Movie.poster_path) || 
            (!isLargeRow && Movie.backdrop_path)) && (
                <img
                title={Movie?.title || Movie?.name || Movie?.original_name}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={Movie.id}
                src={`${base_url}${
                  Movie.poster_path

                }`}
                alt={Movie?.title || Movie?.name || Movie?.original_name}
              />
            )
        ))}
      </div>
    </div>
  );
};

export default Row;


// landscape view of contents - "          isLargeRow ? Movie.poster_path : Movie.backdrop_path"