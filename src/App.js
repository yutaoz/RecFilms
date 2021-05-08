import './App.css';
import title from './RecFilmsLogo.png';
import Search from './Search';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [id] = useState(uuidv4());
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="img-logo"></img>
      </header>
      <Search id={id}/>
    </div>
  );
}

export default App;
