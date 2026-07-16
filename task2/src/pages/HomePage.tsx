import React from 'react';

interface HomePageProps {
  theme: 'light' | 'dark';
  onThemeChange: (selectedTheme: 'light' | 'dark') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ theme, onThemeChange }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 max-w-4xl mx-auto">
      
      {/* Header Utama */}
      <h1 className="text-3xl md:text-5xl font-black text-center mb-8 tracking-tight font-sans">
        Choose Your Preferred Mode
      </h1>

      {/* Kontrol Mode */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-10">
        <button 
          onClick={() => onThemeChange('dark')}
          className={`w-72 h-16 rounded-full border-3 text-lg font-bold transition-all duration-300 relative overflow-hidden active:scale-95
            ${theme === 'dark' 
              ? 'bg-white text-black border-neutral-200' 
              : 'bg-black text-white border-white hover:bg-white hover:text-black hover:border-black'
            }`}
        >
          Dark Mode
        </button>

        <button 
          onClick={() => onThemeChange('light')}
          className={`w-72 h-16 rounded-full border-3 text-lg font-bold transition-all duration-300 relative overflow-hidden active:scale-95
            ${theme === 'light' 
              ? 'bg-black text-white border-neutral-800' 
              : 'bg-white text-black border-black hover:bg-black hover:text-white hover:border-white'
            }`}
        >
          Light Mode
        </button>
      </div>

      {/* Sanrio Gifs Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <img 
          src="https://media.tenor.com/zuMGg-gGkLAAAAAM/pochacco.gif" 
          className="w-44 h-auto rounded-lg shadow-sm" 
          alt="Pochacco animasi"
        />
        <img 
          src="https://media.tenor.com/c04ddP--r7IAAAAM/sanrio-sanrio-characters.gif" 
          className="w-44 h-auto rounded-lg shadow-sm" 
          alt="Sanrio characters animasi"
        />
      </div>

      {/* Divider */}
      <div className="w-full text-center border-t border-dashed border-neutral-300 dark:border-neutral-700 py-6 mb-4"></div>

      {/* Section Profil */}
      <section className="w-full bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 text-left">
        <h2 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
          Name: Yohanes Nicholas Setiawan
        </h2>
        
        <p className="mb-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
          <strong className="text-black dark:text-white block mb-1">Bio:</strong>
          I'm a college student passionate about technology, currently diving into web development. <br />
          I enjoy building things from scratch and figuring out how the web works under the hood—from how a page looks to how it actually functions.
        </p>

        <div>
          <strong className="text-black dark:text-white block mb-2">Skills I plan to learn:</strong>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-400">
            <li>HTML &amp; CSS</li>
            <li>Git &amp; GitHub</li>
            <li>JavaScript &amp; PHP</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
