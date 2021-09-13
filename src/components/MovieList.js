import React from "react";
import Movie from "./Movie";

function MovieList({ movieListArray, title}) {
    // console.log(movieListArray)
    return (
        <div id="movie-list">
            <h2 id={title}>{title}</h2>
            {movieListArray.map(movie => {
                return(
                    <Movie key={movie.id} movie={movie}/>
                )
            })}
            <hr></hr>
        </div>
    );
}

export default MovieList;