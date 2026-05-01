import { Award, Users, BookOpen } from 'lucide-react';

const Home = () => (
  <>
    {/* Hero Section */}
    <section className="hero-bg h-screen flex items-center text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Welcome to<br />Dona Asuncion Lee<br />Integrated School
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10">
          Nurturing Excellence, Building Character, and Shaping Future Leaders.
        </p>
        <button 
          onClick={() => document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' })}
          className="bg-accent hover:bg-yellow-600 text-primary font-semibold px-10 py-4 rounded-lg text-lg transition"
        >
          Discover DALIS
        </button>
      </div>
    </section>

    {/* Highlights */}
    <section id="highlights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Why Choose DALIS?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center p-8 rounded-2xl hover:shadow-xl transition">
            <Award className="w-16 h-16 mx-auto text-accent mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Academic Excellence</h3>
            <p className="text-gray-600">Quality education from Kindergarten to Senior High School.</p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:shadow-xl transition">
            <Users className="w-16 h-16 mx-auto text-accent mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Holistic Development</h3>
            <p className="text-gray-600">Character formation, leadership, and co-curricular activities.</p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:shadow-xl transition">
            <BookOpen className="w-16 h-16 mx-auto text-accent mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Future-Ready Programs</h3>
            <p className="text-gray-600">Aligned with DepEd standards and industry needs.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;