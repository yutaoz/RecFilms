import { useEffect } from "react";
import './moviegrid.css';
import errimg from './errimg.jpg';

function MovieGrid(props) {

    if (props.data[0]) {
        return (
        <div className="gridbox">
            {props.data.map((item, i) => {
                    return(
                    <div className="griditem" key={i}>
                        <img src={item.Poster} alt={errimg} className="poster"></img><br></br>
                        <div className="overlay">
                            <p>{item.Title}</p>
                            <button type="button" className="addbutton" onClick={() => {props.addList(item)}}>Add to list</button>
                        </div>
                    </div>)
            })}
         </div>)
    } else {
        return(
        <div className="errorcontainer">
            <p className="error">Search for a movie, or make your search more specific</p>
        </div>
        )
    }

    
}

export default MovieGrid;