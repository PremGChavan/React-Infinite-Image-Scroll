export default function Modal({ image, onClose}){

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg overflow-hidden flex w-11/12 max-w-6xl h-[80vh] relative'>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700"
          onClick={onClose}>
          X
        </button>

        {/* Right : Image Display */}
        <div className="w-1/2 p-4 flex items-center justify-center">
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className="max-h-full rounded-md shadow"
          />
        </div>

        {/* Left : Image Details */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">
            Uploaded By: {image.user.name} (@{image.user.username})
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Upload Date: {new Date(image.created_at).toLocaleString()}
          </p>
          <hr className="my-2" />

          <p className="font-medium mb-2">Description:</p>
          <p className="text-sm text-gray-700 mb-4">{image.alt_description || "No description available."}</p>

          <p className="text-sm mb-2">Width: {image.width}px</p>
          <p className="text-sm mb-2">Height: {image.height}px</p>

          <hr className="my-4" />

          <a
            href={`${image.links.download}?force=true`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Download
          </a>
        </div>

      </div>
    </div>
  )
}

 Modal