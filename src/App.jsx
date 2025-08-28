import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-300 selection:bg-green-400/30 selection:text-green-100">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home" className="pt-20">
            <Hero />
          </section>
          <section id="projects" className="container mx-auto px-4 py-24">
            <Projects />
          </section>
          <section id="about" className="container mx-auto px-4 py-24">
            <About />
          </section>
          <section id="contact" className="container mx-auto px-4 py-24">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
