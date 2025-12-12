function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-xl"
        >
          ×
        </button>

        <img
          src={src}
          alt=""
          className="max-h-[60vh] max-w-[60vw] rounded-xl"
        />
      </div>
    </div>
  );
}

export default ImageModal;