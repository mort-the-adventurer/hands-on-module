export const AboutPage = () => {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">About Me</h1>
      <div className="prose dark:prose-invert text-neutral-600 dark:text-neutral-400 space-y-4 leading-relaxed">
        <p>
          Hello, I'm <strong>Yohanes Nicholas Setiawan</strong>, a developer currently studying informatics concepts while transitioning to broader technological fields. 
        </p>
        <p>
          This portfolio is a live documentation of my journey from basic web scripting elements in HTML to high-level framework implementations using React and TypeScript.
        </p>
        <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-2">My Learning Path</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Phase 1:</strong> Mastering semantic HTML, modern styling tools (like Tailwind), and JavaScript foundations.</li>
          <li><strong>Phase 2:</strong> Moving into reactive SPAs, declarative UI development, and utilizing strong types via TypeScript.</li>
          <li><strong>Phase 3:</strong> Integrating server-side capabilities with backend databases and learning how web apps function under-the-hood.</li>
        </ul>
      </div>
    </div>
  );
};
