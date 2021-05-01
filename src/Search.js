import React, {useEffect, useState, useRef} from 'react';
import {createBrowserHistory} from 'history';
import './search.css';

  function Search(){
    const [movies, setMovies] = useState([]);
    const [searching, setSearching] = useState(null);
    const history = createBrowserHistory();

    // searchMovies(q) makes a get request with parameter q
    const searchMovies = async (q) => {
        setSearching(true);
        const url = `http://www.omdbapi.com/?&apikey=b5820ebc&s=${q}&type="movie"`;
        return fetch(url)
         .then(data => data.json())
         .then(res => 
            {
              if (res.Search) {
              setMovies(res.Search);
            } else {
              setMovies([]);
            }
          }
         )
         
    }
    // handleType updates query parameter in url and calls search function
    const handleType = (e) => {  
      history.push({
        pathname: "/",
        search: `?s=${e.target.value}`
      })
      searchMovies(e.target.value);
    }
    return (
        <div className="searchContainer">
        <form className="searchform"> 
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search for a movie"
                    name="s"
                    className="searchbar"
                    autoComplete="off"
                    onChange={(e) => 
                      handleType(e)}
                /><br></br><br></br>
            </form>
            <p className="pp">{movies[0] && movies[0].Title ? movies[0].Title : "na"}</p>
    </div>
    )
}

export default Search;