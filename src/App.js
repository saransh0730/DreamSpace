import './App.css';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Layout from './components/LayoutComponent';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Layout>
    <HeroSection/>
    <Services />
    <Projects />
    <Reviews />
    <Contact />
    <Footer />
    </Layout>
    </div>
  );
}

export default App;
