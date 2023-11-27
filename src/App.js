import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import ExerciseDetail from '../src/pages/ExerciseDetail';
import Footer from './components/Footer';
import Exercises from '../src/pages/Exercises'

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/Exercises" element={<Exercises />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
