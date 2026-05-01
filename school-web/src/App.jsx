import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Announcements from './pages/Announcements';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAdminLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsAdminLoggedIn(false);
    setCurrentPage('home');
  };

  if (isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'programs': return <Programs />;
      case 'announcements': return <Announcements />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onAdminClick={() => setCurrentPage('admin-login')}
      />
      <main>
        {currentPage === 'admin-login' ? 
          <AdminLogin onLoginSuccess={() => setIsAdminLoggedIn(true)} /> 
          : renderPage()
        }
      </main>
      {currentPage !== 'admin-login' && <Footer />}
    </div>
  );
}

export default App;