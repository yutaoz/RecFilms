import {push as Menu} from 'react-burger-menu';
import './sidebar.css';

function Sidebar(props) {
    return (
        <Menu>
            {props.listData.map((item) => {
                return(
                <div className="listitem">
                    <p>{item.Title}</p>
                    <button className="deletebutton" type="button" onClick={() => props.removeList(item)}>Remove</button>
                </div>
                )
            })}
        </Menu>
    )
}

export default Sidebar;