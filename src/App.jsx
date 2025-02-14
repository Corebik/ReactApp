/*Dependencies*/
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

/*Views*/
import Home from './views/Home';
import ExerciseDetail from './views/ExerciseDetail';

/*Components*/
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
