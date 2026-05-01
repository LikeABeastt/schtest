import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received by the school administration.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
        <p className="text-gray-600">We'd love to hear from you</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Our Location</h4>
              <p className="text-gray-600">Angeles City, Central Luzon, Philippines</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Phone size={28} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">(045) 123-4567</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">info@dalis.edu.ph</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" required
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:border-accent" />
            
            <input type="email" placeholder="Your Email" required
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:border-accent" />

            <input type="text" placeholder="Subject" required
              value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:border-accent" />

            <textarea rows="5" placeholder="Your Message" required
              value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:border-accent resize-y"></textarea>

            <button type="submit" className="w-full bg-primary hover:bg-blue-950 text-white py-5 rounded-2xl font-semibold text-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;