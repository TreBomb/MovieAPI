import React from "react";
import Movie from "./Movie";
import ViewAll from "./ViewAll";

function MovieList({ movieListArray, title }) {
    return (
        <div id="movie-list-container">
            <h2 id={title}>{title}</h2>
            <div id="movie-grid">
            {movieListArray.map(movie => {
                return(
                    <Movie key={movie.id} movie={movie}/>
                )
            })}
            <div className="pages">
                
            </div>
            </div>
        </div>
    );
}

export default MovieList;