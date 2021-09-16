import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import ViewAll from "./ViewAll";

function MovieList({ movieListArray, title, list }) {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [movies, setMovies] = useState([]);
    const [change, forceChange] = useState("");

    useEffect(() => {
        fetch(`${list}&page=1`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            setPage(data.page);
            setTotalPages(data.total_pages);
            setMovies(movieListArray);
        })
    }, [movieListArray])

    useEffect(() => {
        if(change==="prev") {
            page === 1 ? setPage(totalPages) : setPage(page - 1);
            console.log(`${list}&page=${page}`);
            fetch(`${list}&page=${page}`)
            .then(r => r.json())
            .then(data => {
                console.log(`prev:`, data);
                setPage(data.page);
                setMovies(data.results);
            })
            forceChange("");
        }
        if(change==="next") {
            page === totalPages ? setPage(1) : setPage(page + 1);
            console.log(`${list}&page=${page}`);
            fetch(`${list}&page=${page}`)
            .then(r => r.json())
            .then(data => {
                console.log(`next:`, data);
                setPage(data.page);
                setMovies(data.results);
            })
            forceChange("");
        }
    }, [change])

    if(title !=="Search Results") {
        return (
            <div id="movie-list-container">
                <h2 id={title}>{title}</h2>
                <div id="movie-grid">
                {movies.map(movie => {
                    return(
                        <Movie key={movie.id} movie={movie}/>
                    )
                })}
                </div>
                <div className="pages">
                    <button className="page-button" onClick={e => forceChange("prev")}>{`<`}</button>
                    <p className="page-number">{page}</p>
                    <button className="page-button" onClick={e => forceChange("next")}>{`>`}</button>
                </div>
            </div>
        );
    } else if (title === "Search Results") {
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
        )
    }
}

export default MovieList;