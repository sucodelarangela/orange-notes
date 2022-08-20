// styles
import './App.sass';

// dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Create from './pages/Create';

function App() {

  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/criar-card' element={<Create />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
