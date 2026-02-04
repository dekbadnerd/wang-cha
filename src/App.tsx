import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { FullMenuPage } from './pages/FullMenuPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/menu" element={<FullMenuPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

