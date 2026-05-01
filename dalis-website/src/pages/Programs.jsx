const Programs = () => {
  const programs = [
    { level: "Basic Education", desc: "Kindergarten • Elementary • Junior High School" },
    { level: "Senior High School", desc: "STEM • ABM • HUMSS • GAS • TVL Tracks" },
  ];

  const strands = [
    { name: "STEM", desc: "Science, Technology, Engineering, and Mathematics" },
    { name: "ABM", desc: "Accountancy, Business and Management" },
    { name: "HUMSS", desc: "Humanities and Social Sciences" },
    { name: "GAS", desc: "General Academic Strand" },
    { name: "TVL", desc: "Technical-Vocational-Livelihood Track" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Academic Programs</h2>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {programs.map((prog, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-3xl font-bold text-primary mb-4">{prog.level}</h3>
            <p className="text-lg text-gray-600">{prog.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-semibold text-center mb-10">Senior High School Strands</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {strands.map((strand, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition border border-gray-100">
            <h4 className="text-3xl font-bold text-primary mb-2">{strand.name}</h4>
            <p className="text-gray-600">{strand.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;