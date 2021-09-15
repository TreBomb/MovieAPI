import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';

function SearchBar({ setSearchedMovies }) {
    const SEARCH_PATH = "https://api.themoviedb.org/3/search/movie?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&query=";
    const SEARCH_FILTER = "&include_adult=false";
    const [text, setText] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (text !== "") {
            fetch(`${SEARCH_PATH}${text}${SEARCH_FILTER}`)
            .then(resp => resp.json())
            .then(data => setSearchedMovies(data.results))
            history.push(`/search/${text}`);
        } else {
            history.push("/");
        }
    }, [text])
    return(
        <div className="searchbar">
            <input
                value={text}
                type="text"
                id="search"
                placeholder= "Search Movies"
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;