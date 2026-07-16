import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  // Menggunakan custom hookuseLocalStorage (Bonus 1)
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  const toggleTheme = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
  };

  return (
    // Menambahkan class "dark" ke root div jika state bertema dark aktif (Bonus 2)
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-300 flex flex-col">
        <Router>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={<HomePage theme={theme} onThemeChange={toggleTheme} />} 
              />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
