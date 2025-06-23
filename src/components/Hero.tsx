
import { Play, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onPlayTrack: (track: any) => void;
}

export const Hero = ({ onPlayTrack }: HeroProps) => {
  const featuredTrack = {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    album: "Starboy",
    duration: "3:50",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&h=600"
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-music-primary via-music-secondary to-music-accent p-8 animate-fade-in">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex items-center space-x-8">
        {/* Album Art */}
        <div className="flex-shrink-0">
          <img
            src={featuredTrack.image}
            alt={featuredTrack.title}
            className="w-32 h-32 rounded-xl shadow-2xl animate-pulse-glow"
          />
        </div>

        {/* Track Info */}
        <div className="flex-1">
          <div className="mb-2">
            <span className="text-sm font-medium text-white/80">Featured Track</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{featuredTrack.title}</h1>
          <p className="text-xl text-white/80 mb-4">{featuredTrack.artist}</p>
          <p className="text-white/60 mb-6">{featuredTrack.album} • {featuredTrack.duration}</p>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => onPlayTrack(featuredTrack)}
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Play Now
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20 p-3 rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20 p-3 rounded-full">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
