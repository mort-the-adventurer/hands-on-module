import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800 py-4 px-6 flex justify-between items-center bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-300">
      <span className="font-bold text-lg tracking-wider">Yohanes.Dev</span>
      <div className="flex gap-6 font-medium">
        <Link to="/" className="hover:opacity-75 transition-opacity">Home</Link>
        <Link to="/projects" className="hover:opacity-75 transition-opacity">Projects</Link>
        <Link to="/about" className="hover:opacity-75 transition-opacity">About</Link>
      </div>
    </nav>
  );
};
