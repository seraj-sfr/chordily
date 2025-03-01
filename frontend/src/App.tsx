import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ArtistsPage from './pages/ArtistsPage';
import SongsPage from './pages/SongsPage';
import ChordsPage from './pages/ChordsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/songs/:artistId" element={<SongsPage />} />
        <Route path="/chords/:songId" element={<ChordsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
