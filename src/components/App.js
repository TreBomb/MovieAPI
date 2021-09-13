import React, {useState, useEffect} from "react";
import logo from '../logo.svg';
import Header from "./Header";
import MovieList from "./MovieList";



function App() {
  const POPULAR_LIST = "https://api.themoviedb.org/3/movie/popular?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&page=1";
  const [popularList, setPopularList] = useState([]);

  const NOWPLAYING_LIST = "https://api.themoviedb.org/3/movie/now_playing?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&page=1";
  const [nowPlayingList, setNowPlayingList] = useState([]);

  const [searchedMovies, setSearchedMovies] = useState([]);

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
  }, [])

  return (
    <div className="App">
      <Header setSearchedMovies={setSearchedMovies} />
      <MovieList movieListArray={popularList} title="Most Popular" />
      <MovieList movieListArray={nowPlayingList} title="Now Playing" />
    </div>
  );
}

export default App;
