import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from'./components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <Navbar />
          <HomePage />
        </Route>

      </Router>
    </div>
  );
}

export default App;
