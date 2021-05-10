import React, {useEffect, useState, useRef} from 'react';
import {createBrowserHistory} from 'history';
import MovieGrid from './MovieGrid.js';
import './search.css';
import Sidebar from './Sidebar.js';

  function Search(props){
    
    const [movies, setMovies] = useState([]);
    const [searching, setSearching] = useState(null);
    const history = createBrowserHistory();
    const [movieList, setMovieList] = useState([]);

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

    // addToList adds the movie object to the list
    const addToList = (movie) => {
      let listMovies = [...movieList];
      listMovies.push(movie);
      setMovieList(listMovies);
      fetch(`http://www.recfilms.tech/add?id=${props.id}&movie=${JSON.stringify(movie)}`)
        .then(data => data.json())
        .then((res) => {console.log(res)})
    }

    // removeFromList removes the movie object from a list
    const removeFromList = (movie) => {
      let listMovies = [...movieList];
      const index = listMovies.indexOf(movie);
      listMovies.splice(index, 1);
      setMovieList(listMovies);
      fetch(`http://www.recfilms.tech/remove?id=${props.id}&movie=${JSON.stringify(movie)}`)
        .then(data => data.json())
        .then((res) => {console.log(res)})
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
          <Sidebar listData={movieList} removeList={removeFromList} id={props.id}></Sidebar>
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
            <MovieGrid data={movies} addList={addToList}></MovieGrid>
    </div>
    )
}

export default Search;