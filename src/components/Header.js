import React from "react";
import SearchBar from "./SearchBar";

function Header({ setSearchedMovies }) {
    return (
        <div id="header">
            <h1 id="title">Flikipedia</h1>
            <SearchBar setSearchedMovies={setSearchedMovies} />
            <hr></hr>
        </div>
    )
}


export default Header;