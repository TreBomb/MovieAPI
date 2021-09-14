import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useHistory } from 'react-router-dom';

function Header({ setSearchedMovies }) {
    const history = useHistory();

    return (
        <div id="header">
            <h1 id="title" onClick={e => history.push("/")}>Flikipedia</h1>
            <SearchBar setSearchedMovies={setSearchedMovies} />
            <NavBar />
        </div>
    )
}


export default Header;