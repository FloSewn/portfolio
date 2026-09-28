import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Article } from './pages/Article';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </div>
  );
}
