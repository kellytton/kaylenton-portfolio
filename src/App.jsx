import { Box } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Abstract Gradient Background - spans navbar, hero, and bleeds into about */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: { xs: '95vh', sm: '110vh', md: '125vh' },
          background: `
            radial-gradient(ellipse 45% 35% at 8% 15%, rgba(16, 192, 223, 0.32) 0%, transparent 70%),
            radial-gradient(ellipse 90% 45% at 72% 8%, rgba(16, 192, 223, 0.28) 0%, transparent 65%),
            radial-gradient(ellipse 35% 55% at 95% 35%, rgba(91, 79, 217, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse 55% 30% at 25% 55%, rgba(91, 79, 217, 0.22) 0%, transparent 55%),
            radial-gradient(ellipse 40% 65% at 60% 25%, rgba(125, 253, 204, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 70% 25% at 15% 75%, rgba(125, 253, 204, 0.2) 0%, transparent 55%),
            radial-gradient(ellipse 30% 40% at 85% 65%, rgba(16, 192, 223, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse 50% 35% at 45% 45%, rgba(91, 79, 217, 0.12) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
