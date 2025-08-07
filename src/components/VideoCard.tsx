import { useState } from 'react';
import Modal from 'react-modal';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import '../../src/styles/Modal.css';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

interface VideoCardProps {
  title: string;
  videoId: string;
}

const VideoCard = ({ title, videoId }: VideoCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(true);
  };

  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIsOpen(true);
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">{title}</h3>
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
          {showVideo ? (
            <iframe
              width="100%"
              height="100%"
              src={`${embedUrl}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          ) : (
            <div 
              className="w-full h-full cursor-pointer group"
              onClick={handleThumbnailClick}
              aria-label={`Play ${title}`}
            >
              <img 
                src={thumbnailUrl} 
                alt={`Thumbnail for ${title}`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black bg-opacity-60 rounded-full flex items-center justify-center group-hover:bg-opacity-70 transition-all duration-300">
                  <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3 flex justify-between items-center flex-wrap gap-2">
          <button 
            onClick={handlePlayButtonClick}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium transition-colors whitespace-nowrap"
            aria-label="Play video in modal"
          >
            <FaPlay size={12} /> <span className="hidden xs:inline">Play in Modal</span>
          </button>
          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 sm:py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium transition-colors whitespace-nowrap"
            onClick={(e) => e.stopPropagation()}
            aria-label="Open in YouTube"
          >
            <FaExternalLinkAlt size={12} /> <span className="hidden xs:inline">Open in YouTube</span>
          </a>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel={`Video: ${title}`}
        className="modal-content"
        overlayClassName="modal-overlay"
        closeTimeoutMS={200}
        ariaHideApp={false}
      >
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="p-3 sm:p-4 border-b">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">{title}</h2>
          </div>
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0">
              <iframe
                width="100%"
                height="100%"
                src={`${embedUrl}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
                style={{ border: 'none' }}
              />
            </div>
          </div>
          <div className="p-3 sm:p-4 flex justify-end border-t">
            <button
              onClick={() => setModalIsOpen(false)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-medium transition-colors text-sm sm:text-base"
              aria-label="Close video"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoCard;
