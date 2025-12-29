import { Box } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;
