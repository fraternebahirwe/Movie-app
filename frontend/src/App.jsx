import { Routes, Route, Link, useLocation } from 'react-router-dom';
// import Home from './pages/Home'; // adjust based on your page names
// import Favorites from './pages/Favorites';
import './css/App.css'; // or wherever your main CSS lives

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">🍿 Movie App</Link>
        </div>
        <div className="navbar-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/favorites" 
            className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
          >
            Favorites
          </Link>
        </div>
      </nav>

      {/* Main Content / Routes */}
      <main className="main-content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
