import React from "react";
import Movie from "./Movie";

function MovieList({ movieListArray, title}) {
    // console.log(movieListArray)
    return (
        <div id="movie-list-container">
            <h2 id={title}>{title}</h2>
            <div id="movie-grid">
            {movieListArray.map(movie => {
                return(
                    <Movie key={movie.id} movie={movie}/>
                )
            })}
            </div>
        </div>
    );
}

export default MovieList;