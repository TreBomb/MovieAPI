import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import logo from '../logo.svg';
import Header from "./Header";
import MovieList from "./MovieList";
import IndividualList from "./IndividualList";
let sessionID;


function App() {
  const POPULAR_LIST = "https://api.themoviedb.org/3/movie/popular?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US";
  const [popularList, setPopularList] = useState([]);

  const NOWPLAYING_LIST = "https://api.themoviedb.org/3/movie/now_playing?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US";
  const [nowPlayingList, setNowPlayingList] = useState([]);

  const ALL_LIST = "https://api.themoviedb.org/3/discover/movie?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false";
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

    fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=96e1ba7547341bdadc80d9ff0f1edbab')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      sessionID = data.guest_session_id;
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
          <IndividualList movieListArray={popularList} title="Most Popular" list={POPULAR_LIST} />
        </Route>
        <Route exact path="/playing">
        <div id="spacer"></div>
          <IndividualList movieListArray={nowPlayingList} title="Now Playing" list={NOWPLAYING_LIST} />
        </Route>
        <Route exact path="/all">
        <div id="spacer"></div>
          <IndividualList movieListArray={allList} title="All" list={ALL_LIST} />
        </Route>
        <Route exact path="/home">
        <div id="spacer"></div>
          <MovieList movieListArray={nowPlayingList} title="Now Playing" />
          <MovieList movieListArray={popularList} title="Most Popular" />
        </Route>
        <Route path="/search">
        <div id="spacer"></div>
          <IndividualList movieListArray={searchedMovies} title="Search Results" list={ALL_LIST} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
export {sessionID};