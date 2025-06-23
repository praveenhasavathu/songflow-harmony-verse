
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Hero } from '@/components/Hero';
import { FeaturedSection } from '@/components/FeaturedSection';
import { MusicPlayer } from '@/components/MusicPlayer';
import { RecentlyPlayed } from '@/components/RecentlyPlayed';
import { TrendingCharts } from '@/components/TrendingCharts';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&h=300"
  });

  const playTrack = (track: any) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-hidden">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto pb-32">
            <div className="px-6 py-4 space-y-8">
              {/* Hero Section */}
              <Hero onPlayTrack={playTrack} />
              
              {/* Featured Section */}
              <FeaturedSection onPlayTrack={playTrack} />
              
              {/* Recently Played */}
              <RecentlyPlayed onPlayTrack={playTrack} />
              
              {/* Trending Charts */}
              <TrendingCharts onPlayTrack={playTrack} />
            </div>
          </main>
        </div>
      </div>
      
      {/* Music Player - Fixed at bottom */}
      <MusicPlayer 
        track={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
      />
    </div>
  );
};

export default Index;
