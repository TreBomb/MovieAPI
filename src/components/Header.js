import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

function Header({ setSearchedMovies }) {
    return (
        <div id="header">
            <h1 id="title">Flikipedia</h1>
            <SearchBar setSearchedMovies={setSearchedMovies} />
            <NavBar />
        </div>
    )
}


export default Header;