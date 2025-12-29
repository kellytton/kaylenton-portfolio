import { Box } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </Box>
  );
}

export default App;
