import { useEffect } from "react";
import './moviegrid.css';

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
                        <img src={item.Poster} className="poster"></img><br></br>
                        <div className="overlay">
                            <p>{item.Title}</p>
                        </div>
                    </div>)
            })}
         </div>)
    } else {
        return(<p>Nothing Found</p>)
    }

    
}

export default MovieGrid;