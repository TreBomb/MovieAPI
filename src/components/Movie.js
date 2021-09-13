import React, { useState, useEffect } from "react";

function Movie ({ movie, onClickSelect }) {
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
    const [selectedMovie, setSelectedMovies] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/movie/${movie.id}?api_key=96e1ba7547341bdadc80d9ff0f1edbab`)
        .then(resp => resp.json())
        .then(data => {
            setSelectedMovies(data);
        });
    }, []);

    function onClickSelect() {
    console.log(`${movie.title} was clicked!`);
} 


    // add onClick handler when clicked fetch movie by id, see endpoints list

    //set state of current movie to API response, show card and add details to compnent
    return(
        <div>
        <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={`${movie.title} Poster`} onClick={onClickSelect}></img>
        </div>
    );
}

export default Movie;
