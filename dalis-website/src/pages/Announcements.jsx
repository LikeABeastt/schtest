import { Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  // Load announcements from localStorage
  useEffect(() => {
    const loadAnnouncements = () => {
      const saved = JSON.parse(localStorage.getItem('dalAnnouncements') || '[]');
      setAnnouncements(saved);
    };

    loadAnnouncements();

    // Listen for changes (in case admin updates while page is open)
    window.addEventListener('storage', loadAnnouncements);
    return () => window.removeEventListener('storage', loadAnnouncements);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Announcements & News</h2>
        <p className="text-gray-600">Latest updates from Dona Asuncion Lee Integrated School</p>
      </div>

      {announcements.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No announcements available at the moment.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {announcements.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                  <div className="flex items-center gap-1">
                    <Calendar size={18} />
                    <span>{item.date}</span>
                  </div>
                  <span className="bg-accent/10 text-accent text-xs px-4 py-1.5 rounded-full font-medium">
                    {item.category || 'General'}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcements;