import React from "react";
import MovieCard from "./MovieCard";

function MostPopular({ popularList }) {
    console.log(popularList)
    return (
        popularList.map(movie => {
            return <MovieCard key={movie.id} movie={movie}/>;
        })
    );
}

export default MostPopular;