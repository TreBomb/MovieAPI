import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import {sessionID} from "./App";



function Movie ({ movie, onClickSelect }) {
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
    const [selectedMovie, setSelectedMovies] = useState([]);
    // const [movieRating, setMovieRatings] = useState([]);

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

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
    const movieRating = {
      "value": 8.5
    }

    function handleRateMovie(e) {
      const value = e.target.value; //this is a string rn, make it an int before sending
      e.preventDefault()
      console.log('form submitted')
  
      fetch(`${BASE_URL}/movie/${movie.id}/rating?api_key=96e1ba7547341bdadc80d9ff0f1edbab&guest_session_id=${sessionID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          "value": value
        }
      })
        .then(r => r.json())
        .then(responseJson => {
        console.log(responseJson)
          // onSubmit(updatedPizzaObj)
        })
    }

    // add onClick handler when clicked fetch movie by id, see endpoints list

    //set state of current movie to API response, show card and add details to compnent
    return(
        <div>
        <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={`${movie.title} Poster`} onClick={togglePopup}></img>
      {isOpen && <Popup
        content={<>
          <h1>{selectedMovie.title}</h1>
          <p>{selectedMovie.release_date.substr(0, 4)}</p>
          <p>Rating: {selectedMovie.vote_average}/10  ({selectedMovie.vote_count})</p>
          <p onClick={handleRateMovie} value="7">Rating here</p>
          {/* ^^ update this so if you click it the value is passed to the handler */}
          <p>{selectedMovie.overview}</p>
          {/* <button>{}</button>  */}
        </>}
        handleClose={togglePopup}
      />}
        </div>
    );
}

export default Movie;
