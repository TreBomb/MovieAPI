import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import logo from '../logo.svg';
import Header from "./Header";
import MovieList from "./MovieList";
import IndividualList from "./IndividualList";



function App() {
  const POPULAR_LIST = "https://api.themoviedb.org/3/movie/popular?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&page=1";
  const [popularList, setPopularList] = useState([]);

  const NOWPLAYING_LIST = "https://api.themoviedb.org/3/movie/now_playing?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&page=1";
  const [nowPlayingList, setNowPlayingList] = useState([]);

  const ALL_LIST = "https://api.themoviedb.org/3/discover/movie?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  const [allList, setAllList] = useState([]);

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [page, setPage] = useState("/");

  useEffect(() => {
    fetch(POPULAR_LIST)
    .then(resp => resp.json())
    .then(data => {
      setPopularList(data.results);
    })

    fetch(NOWPLAYING_LIST)
    .then(resp => resp.json())
    .then(data => {
      setNowPlayingList(data.results);
    })

    fetch(ALL_LIST)
    .then(resp => resp.json())
    .then(data => {
      setAllList(data.results);
    })
  }, [])

  return (
    <div className="App">
      <Header setSearchedMovies={setSearchedMovies} />
      <Switch>
        <Route exact path="/">
          <div id="spacer"></div>
          <MovieList movieListArray={nowPlayingList} title="Now Playing" />
          <MovieList movieListArray={popularList} title="Most Popular" />
        </Route>
        <Route exact path="/popular">
        <div id="spacer"></div>
          <IndividualList movieListArray={popularList} title="Most Popular" />
        </Route>
        <Route exact path="/playing">
        <div id="spacer"></div>
          <IndividualList movieListArray={nowPlayingList} title="Now Playing" />
        </Route>
        <Route exact path="/all">
        <div id="spacer"></div>
          <IndividualList movieListArray={allList} title="All" />
        </Route>
        <Route exact path="/home">
        <div id="spacer"></div>
          <MovieList movieListArray={nowPlayingList} title="Now Playing" />
          <MovieList movieListArray={popularList} title="Most Popular" />
        </Route>
        <Route path="/search">
        <div id="spacer"></div>
          <IndividualList movieListArray={searchedMovies} title="Search Results" />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
