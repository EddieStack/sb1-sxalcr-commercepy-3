import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;