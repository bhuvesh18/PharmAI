import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { ClinicalTrialsTest } from './pages/testing/ClinicalTrialsTest';
import { GeminiTest } from './pages/testing/GeminiTest';
import { LLMTest } from './pages/testing/LLMTest';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dash" replace />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/geminitest" element={<GeminiTest />} />
        <Route path="/clinical-trials-test" element={<ClinicalTrialsTest />} />
        <Route path="/llm-test" element={<LLMTest />} />
      </Routes>
    </div>
  );
}

export default App;