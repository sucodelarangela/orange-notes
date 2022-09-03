// styles
import './App.sass';

// dependencies
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Create from './pages/Create';
import Footer from './components/Footer';
import Login from './pages/Login';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import { useContext } from 'react';

function App() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) return <div className='home__msg'>Carregando...</div>;

    if (!authenticated) return <Navigate to='/' />;

    return children;
  };

  return (
    <main className="App">
      <Router>
        <AuthContextProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/home' element={<Private><Home /></Private>} />
            <Route path='/criar-card' element={<Private><Create /></Private>} />
            <Route path='/cards/:id' element={<Private><Create /></Private>} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </Router>
    </main>
  );
}

export default App;
