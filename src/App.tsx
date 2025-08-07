import VideoCard from './components/VideoCard';
import './App.css';

// Sample video data - replace these with your actual YouTube video IDs and titles
const videos = [
  {
    id: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    title: 'Amazing Nature Documentary - The Secret Life of Forests',
  },
  {
    id: 'pRpeEdMmmQ0',
    title: 'Cooking Masterclass: Perfect Pasta Every Time',
  },
  {
    id: '9bZkp7q19f0',
    title: 'Morning Yoga Flow for Beginners - 15 Minute Routine',
  },
  {
    id: 'JGwWNGJdvx8',
    title: 'Learn to Play Piano in 30 Days - Lesson 1',
  },
  {
    id: 'kJQP7kiw5Fk',
    title: 'Travel Guide: Top 10 Hidden Gems in Europe',
  },
  {
    id: 'JGwWNGJdvx8',
    title: 'DIY Home Decoration Ideas on a Budget',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-[2000px] px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Video Gallery</h1>
          <p className="text-gray-600">Click on any video to watch</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              videoId={video.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
