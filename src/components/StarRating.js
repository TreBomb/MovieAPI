import React, {useState, useEffect} from "react";
import {sessionID} from "./App";


const StarRating = ({ movie }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const BASE_URL = "https://api.themoviedb.org/3";


    // function handleRateMovie(value) {
    //     // const strValue = e.target.name; //this is a string rn, make it an int before sending
    //     // const value = parseInt(strValue, 10);
    //     // e.preventDefault()
    //     console.log(`**Got Rating: ${rating}`);
    //     console.log(`**Got Value: ${value}`);
  
    //     const requestBody = {
    //       "value": value
    //     }
    
    //     fetch(`${BASE_URL}/movie/${movie.id}/rating?api_key=96e1ba7547341bdadc80d9ff0f1edbab&guest_session_id=${sessionID}`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(requestBody)
    //     })
    //       .then(r => r.json())
    //       .then(responseJson => {
    //       console.log(responseJson)
    //         // onSubmit(updatedPizzaObj)
    //       })
    //   }

      useEffect(() => {
        console.log(`**Got Rating: ${rating}`);
  
        const requestBody = {
          "value": rating
        }
        
        if(rating !== 0) {
          fetch(`${BASE_URL}/movie/${movie.id}/rating?api_key=96e1ba7547341bdadc80d9ff0f1edbab&guest_session_id=${sessionID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
          })
            .then(r => r.json())
            .then(responseJson => {
            console.log(responseJson)
              // onSubmit(updatedPizzaObj)
            })
        }
      }, [rating])

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => {
                  setRating(5 - index)
                  // handleRateMovie(index)
                }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9734;</span>
            </button>
          );
        })}
      </div>
    );
  };

export default StarRating;