import logo from './logo.svg';
import './App.css';
import title from './RecFilmsLogo.png';
import Sidebar from './Sidebar.js';
import InfiniteGrid from 'react-infinite-grid';
import GridItem from './GridItem.js';
import Search from './Search';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="img-logo"></img>
      </header>
      <Sidebar />
      <Search />
    </div>
  );
}

export default App;
