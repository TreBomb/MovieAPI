import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import ViewAll from "./ViewAll";

function MovieList({ movieListArray, title, onViewMore }) {
    
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
            <ViewAll section={title} />
            <hr></hr>
            {/* <button>View More</button> */}
        </div>
    );
}

export default MovieList;