import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoSection from './components/PhotoSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500/30" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
      <Navbar />

      <main>
        <Hero />
        <PhotoSection />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
