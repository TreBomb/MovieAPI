import React, {useState, useEffect} from "react";
import {sessionID} from "./App";

const BASE_URL = "https://api.themoviedb.org/3";

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

const StarRating = ({ movie, value }) => {
  const [rating, setRating] = React.useState(parseInt(value) || 0);
  const [selection, setSelection] = React.useState(0);

  useEffect(() => {
    const RATINGS_URL = `https://api.themoviedb.org/3/guest_session/${sessionID}/rated/movies?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&sort_by=created_at.desc`;
    fetch(RATINGS_URL)
    .then(r => r.json())
    .then(data => {
      const arr = data.results;
      const movieRating = arr.filter(item => item.title === movie.title);
      setRating(movieRating.rating);
      setSelection(movieRating.rating);
    });
  }, [movie])

  function handleRateMovie(value) {
    const requestBody = {
      "value": value
    }

    fetch(`${BASE_URL}/movie/${movie.id}/rating?api_key=96e1ba7547341bdadc80d9ff0f1edbab&guest_session_id=${sessionID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
      .then(r => r.json())
      .then(responseJson => {
        console.log(responseJson)
      });
  }
  
  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('data-star-id'))
      val = event.target.getAttribute('data-star-id');
    setSelection(val);
  };
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={e => {
        setRating(e.target.getAttribute('data-star-id') || rating);
        handleRateMovie(e.target.getAttribute('data-star-id') || rating);
      }}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

export default StarRating;