import React from "react";

function MovieCard ({ movie }) {
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";

    return(
        <img src={`${BASE_URL}${movie.poster_path}`} alt={`${movie.title} Poster`}></img>
    );
}

export default MovieCard;