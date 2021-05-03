import { useEffect } from "react";
import './moviegrid.css';
import errimg from './errimg.jpg';

function MovieGrid(props) {
    useEffect(() => {
        console.log(props.data[0]);
        
    })

    if (props.data[0]) {
        return (
        <div className="gridbox">
            {props.data.map((item, i) => {
                    return(
                    <div className="griditem" key={i}>
                        <img src={item.Poster} alt={errimg} className="poster"></img><br></br>
                        <div className="overlay">
                            <p>{item.Title}</p>
                            <button type="button" className="addbutton">Add to list</button>
                        </div>
                    </div>)
            })}
         </div>)
    } else {
        return(
        <div className="errorcontainer">
            <p className="error">NO RESULTS</p>
        </div>
        )
    }

    
}

export default MovieGrid;