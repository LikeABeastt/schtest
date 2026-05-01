import { useState, useEffect } from 'react';
import { LogOut, Home, Bell, Image, Users, Settings, Plus, Edit2, Trash2, Save } from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [announcements, setAnnouncements] = useState([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    category: 'General'
  });

  // Load announcements
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dalAnnouncements') || '[]');
    setAnnouncements(saved);
  }, []);

  const saveAnnouncements = (updated) => {
    setAnnouncements(updated);
    localStorage.setItem('dalAnnouncements', JSON.stringify(updated));
    // Trigger update for public page
    window.dispatchEvent(new Event('storage'));
  };

  // Add new announcement
  const handleAddAnnouncement = () => {
    if (!newAnnouncement.title || !newAnnouncement.content) return;

    const announcement = {
      id: Date.now(),
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      category: newAnnouncement.category,
      date: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    const updated = [announcement, ...announcements];
    saveAnnouncements(updated);
    setNewAnnouncement({ title: '', content: '', category: 'General' });
  };

  // Start editing
  const startEditing = (ann) => {
    setEditingAnnouncement({ ...ann });
  };

  // Save edited announcement
  const saveEdit = () => {
    if (!editingAnnouncement.title || !editingAnnouncement.content) return;

    const updated = announcements.map(ann =>
      ann.id === editingAnnouncement.id ? editingAnnouncement : ann
    );

    saveAnnouncements(updated);
    setEditingAnnouncement(null);
  };

  // Delete announcement
  const deleteAnnouncement = (id) => {
    if (!window.confirm("Are you sure you want to delete this announcement?")) return;
    
    const updated = announcements.filter(a => a.id !== id);
    saveAnnouncements(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-primary text-white py-5 px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center text-primary font-bold text-2xl">DAL</div>
          <div>
            <h1 className="font-bold text-2xl">DALIS Admin Panel</h1>
            <p className="text-xs text-gray-300">Dona Asuncion Lee Integrated School</p>
          </div>
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 hover:text-accent">
          <LogOut size={20} /> Logout
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-white shadow-xl p-6 h-[calc(100vh-81px)]">
          <nav className="space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Home },
              { id: 'announcements', label: 'Announcements', icon: Bell },
              { id: 'gallery', label: 'Gallery', icon: Image },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left font-medium transition ${
                  activeTab === item.id ? 'bg-primary text-white' : 'hover:bg-gray-100'
                }`}
              >
                <item.icon size={22} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-3xl font-bold text-primary mb-10">Welcome back, Administrator</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow">
                  <p className="text-gray-500">Total Announcements</p>
                  <p className="text-5xl font-bold text-primary mt-4">{announcements.length}</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow">
                  <p className="text-gray-500">Students</p>
                  <p className="text-5xl font-bold text-primary mt-4">1,284</p>
                </div>
              </div>
            </div>
          )}

          {/* ==================== ANNOUNCEMENTS TAB (with Edit) ==================== */}
          {activeTab === 'announcements' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-primary">Manage Announcements</h2>
                <button
                  onClick={() => setEditingAnnouncement(null)}
                  className="bg-primary text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-950"
                >
                  <Plus size={20} /> New Announcement
                </button>
              </div>

              {/* Add / Edit Form */}
              {(editingAnnouncement !== null || !editingAnnouncement) && (
                <div className="bg-white p-8 rounded-3xl shadow mb-10">
                  <h3 className="font-semibold mb-6 text-lg">
                    {editingAnnouncement ? "Edit Announcement" : "Create New Announcement"}
                  </h3>

                  <input
                    type="text"
                    placeholder="Announcement Title"
                    value={editingAnnouncement ? editingAnnouncement.title : newAnnouncement.title}
                    onChange={(e) => {
                      if (editingAnnouncement) {
                        setEditingAnnouncement({ ...editingAnnouncement, title: e.target.value });
                      } else {
                        setNewAnnouncement({ ...newAnnouncement, title: e.target.value });
                      }
                    }}
                    className="w-full px-5 py-4 border rounded-2xl mb-4"
                  />

                  <textarea
                    placeholder="Announcement Content"
                    rows="5"
                    value={editingAnnouncement ? editingAnnouncement.content : newAnnouncement.content}
                    onChange={(e) => {
                      if (editingAnnouncement) {
                        setEditingAnnouncement({ ...editingAnnouncement, content: e.target.value });
                      } else {
                        setNewAnnouncement({ ...newAnnouncement, content: e.target.value });
                      }
                    }}
                    className="w-full px-5 py-4 border rounded-2xl mb-6"
                  />

                  <div className="flex gap-4">
                    {editingAnnouncement ? (
                      <>
                        <button onClick={saveEdit} className="bg-green-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 hover:bg-green-700">
                          <Save size={20} /> Save Changes
                        </button>
                        <button onClick={() => setEditingAnnouncement(null)} className="bg-gray-500 text-white px-8 py-3 rounded-2xl hover:bg-gray-600">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button onClick={handleAddAnnouncement} className="bg-green-600 text-white px-8 py-3 rounded-2xl hover:bg-green-700">
                        Publish Announcement
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* List of Announcements */}
              <div className="space-y-6">
                {announcements.length === 0 ? (
                  <p className="text-gray-500 text-center py-12">No announcements yet. Create your first one above.</p>
                ) : (
                  announcements.map((ann) => (
                    <div key={ann.id} className="bg-white p-8 rounded-3xl shadow flex justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex gap-3 mb-4">
                          <span className="text-xs bg-accent/10 text-accent px-4 py-1 rounded-full">{ann.category}</span>
                          <span className="text-sm text-gray-500">{ann.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{ann.title}</h3>
                        <p className="text-gray-600 line-clamp-3">{ann.content}</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => startEditing(ann)}
                          className="p-3 text-blue-600 hover:bg-blue-50 rounded-xl transition"
                        >
                          <Edit2 size={20} />
                        </button>
                        <button
                          onClick={() => deleteAnnouncement(ann.id)}
                          className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Other Tabs */}
          {activeTab === 'gallery' && (
            <div className="bg-white p-16 rounded-3xl shadow text-center">
              <Image size={70} className="mx-auto text-gray-300 mb-6" />
              <p className="text-gray-500">Gallery management coming in the next update.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;