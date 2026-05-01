import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage, onAdminClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Programs', id: 'programs' },
    { name: 'Announcements', id: 'announcements' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-2xl">DAL</div>
          <div>
            <h1 className="font-bold text-xl">Dona Asuncion Lee</h1>
            <p className="text-xs text-gray-300 -mt-1">Integrated School</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`hover:text-accent transition-colors ${currentPage === link.id ? 'text-accent border-b-2 border-accent' : ''}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={onAdminClick}
            className="flex items-center gap-2 hover:text-accent transition"
          >
            <LogIn size={18} /> Admin
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary border-t border-gray-700 py-4">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { setCurrentPage(link.id); setIsOpen(false); }}
              className="block w-full text-left px-6 py-3 hover:bg-blue-900"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => { onAdminClick(); setIsOpen(false); }}
            className="block w-full text-left px-6 py-3 hover:bg-blue-900 flex items-center gap-2"
          >
            <LogIn size={18} /> Admin Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;