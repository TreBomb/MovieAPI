import React, { useState, useEffect } from "react";
import Movie from "./Movie";

function IndividualList({ movieListArray, title, list }) {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${list}&page=1`)
        .then(r => r.json())
        .then(data => {
            setPage(1);
            setTotalPages(data.total_pages);
            setMovies(movieListArray);
        })
    }, [movieListArray])

    function changePage(type) {
        if(type==="prev") {
            page === 1 ? setPage(totalPages) : setPage(lastPage => lastPage - 1);
            
            fetch(`${list}&page=${page}`)
            .then(r => r.json())
            .then(data => {
                setMovies(data.results);
            })
        }
        if(type==="next") {
            page === totalPages ? setPage(1) : setPage(lastPage => lastPage + 1);
            
            fetch(`${list}&page=${page}`)
            .then(r => r.json())
            .then(data => {
                setMovies(data.results);
            })
        }
    }

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
                    <button className="page-button" onClick={e => changePage("prev")}>{`<`}</button>
                    <p className="page-number">{page}</p>
                    <button className="page-button" onClick={e => changePage("next")}>{`>`}</button>
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

export default IndividualList;