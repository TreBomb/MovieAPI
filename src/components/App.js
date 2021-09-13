import React, {useState, useEffect} from "react";
import logo from '../logo.svg';
import Header from "./Header";
import MostPopular from "./MostPopular";



function App() {
  const POPULAR_LIST = "https://api.themoviedb.org/3/movie/popular?api_key=96e1ba7547341bdadc80d9ff0f1edbab&language=en-US&page=1";
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetch(POPULAR_LIST)
    .then(resp => resp.json())
    .then(data => {
      setPopularList(data.results);
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <MostPopular popularList={popularList} />
    </div>
  );
}

export default App;
