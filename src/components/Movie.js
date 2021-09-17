import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import StarRating from "./StarRating";
import {sessionID} from "./App";


function Movie ({ movie, onClickSelect }) {
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
    const [selectedMovie, setSelectedMovies] = useState([]);
    // const [movieRating, setMovieRatings] = useState([]);
    const [provider, setProviders] = useState([]);
    const [rentList, setRentList] = useState(null);
    const [buyList, setBuyList] = useState(null);
    const [streamList, setStreamList] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/movie/${movie.id}?api_key=96e1ba7547341bdadc80d9ff0f1edbab&guest_session_id=${sessionID}`)
        .then(resp => resp.json())
        .then(data => {
            setSelectedMovies(data);
        });
    }, []);
   
    useEffect(() => {
      fetch(`${BASE_URL}/movie/${movie.id}/watch/providers?api_key=96e1ba7547341bdadc80d9ff0f1edbab&guest_session_id=${sessionID}`)
      .then(resp => resp.json())
      .then(data => {
          const providers = data.results.US;
            setProviders(providers);
            buildProviders(providers)
      });
  }, []);

    function buildProviders(providers) {
      if (providers && providers.buy) {
          const toSet = (
            <div class="buy-list">
              <h3>Buy it on:</h3>
              {providers.buy.map((movie, index) => {
                return <p key={index}>{movie.provider_name}</p>
              })}
            </div>
          )
          setBuyList(toSet);
      }

      if (providers && providers.flatrate) {
        const toSet = (
          <div class="rent-list">
            <h3>Stream it on:</h3>
            {providers.flatrate.map((movie, index) => {
              return <p key={index}>{movie.provider_name}</p>
            })}
          </div>
        )
        setStreamList(toSet);
    }

    if (providers && providers.rent) {
        const toSet = (
          <div class="rent-list">
            <h3>Rent it on:</h3>
            {providers.rent.map((movie, index) => {
              return <p key={index}>{movie.provider_name}</p>
            })}
          </div>
        )
        setRentList(toSet);
    }
  }

    function onClickSelect() {
        console.log(`${movie.title} was clicked!`);
    }   

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

 
    return(
        <div>
        <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={`${movie.title} Poster`} onClick={togglePopup}></img>
      {isOpen && <Popup
        content={<>
          <h1>{selectedMovie.title}</h1>
          <p>{selectedMovie.release_date.substr(0, 4)}</p>
          <p>Rating: {selectedMovie.vote_average}/10  ({selectedMovie.vote_count})</p> 
          <StarRating movie={movie} />
          <p>{selectedMovie.overview}</p>
          {rentList}
          {streamList}
          {buyList}
        </>}
        handleClose={togglePopup}
      />}
        </div>
    );
}

export default Movie;
