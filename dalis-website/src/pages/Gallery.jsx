import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", caption: "School Campus" },
    { id: 2, url: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f", caption: "Students in Class" },
    { id: 3, url: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0", caption: "Intramurals" },
    { id: 4, url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87", caption: "Graduation Ceremony" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">School Gallery</h2>
        <p className="text-gray-600">Memorable moments at Dona Asuncion Lee Integrated School</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div 
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-md hover:shadow-2xl transition"
          >
            <img 
              src={img.url} 
              alt={img.caption}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-4 text-white text-5xl hover:text-accent">×</button>
            <img src={selectedImage.url} alt={selectedImage.caption} className="rounded-3xl shadow-2xl w-full" />
            <p className="text-white text-center mt-6 text-xl">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;