export default function ImageGallery({ images, setSelectedImage }) {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="overflow-hidden rounded-lg shadow-lg border border-black "
          onClick={ () => setSelectedImage(image) }
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="h-60 w-72 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
