import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movieListArray, title }) {
    console.log(movieListArray)
    return (
        <div id="movie-list">
            <h2 id={title}>{title}</h2>
            {movieListArray.map(movie => {
                return(
                    <MovieCard key={movie.id} movie={movie}/>
                )
            })}
            <hr></hr>
        </div>
    );
}

export default MovieList;