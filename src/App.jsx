import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import K7Admin from './pages/K7Admin';
import CustomDynamicPage from './pages/CustomDynamicPage';
import { PortfolioProvider } from './context/PortfolioContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <PortfolioProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Main Portfolio Home */}
            <Route path="/" element={<Home />} />

            {/* Admin CMS Studio with Email & Password Login */}
            <Route path="/k7admin" element={<K7Admin />} />

            {/* Project Showcase Details */}
            <Route path="/project/:projectId" element={<ProjectDetails />} />

            {/* Dynamic Custom Pages (WordPress / Wix style) */}
            <Route path="/p/:slug" element={<CustomDynamicPage />} />

            {/* Catch-all for custom slugs or 404 */}
            <Route path="/:slug" element={<CustomDynamicPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </PortfolioProvider>
  );
}

export default App;
