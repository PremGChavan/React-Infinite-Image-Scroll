export default function ImageGallery({ images, setSelectedImage }) {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          onClick={ () => setSelectedImage(image) }
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="h-full w-auto overflow-hidden border border-gray-600 rounded-lg  object-cover hover:scale-103 transition-transform duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
}
