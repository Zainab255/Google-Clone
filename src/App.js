import './App.css';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SearchPage from './components/pages/SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path='/search' element={<SearchPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
