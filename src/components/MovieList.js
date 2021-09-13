import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movieListArray }) {
    console.log(movieListArray)
    return (
        movieListArray.map(movie => {
            return <MovieCard key={movie.id} movie={movie}/>;
        })
    );
}

export default MovieList;