
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedSectionProps {
  onPlayTrack: (track: any) => void;
}

export const FeaturedSection = ({ onPlayTrack }: FeaturedSectionProps) => {
  const featuredPlaylists = [
    {
      id: 1,
      title: "Today's Top Hits",
      description: "The biggest hits right now",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&h=300",
      tracks: 50
    },
    {
      id: 2,
      title: "Chill Vibes",
      description: "Relax and unwind with these tracks",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&h=300",
      tracks: 32
    },
    {
      id: 3,
      title: "Pop Rising",
      description: "New pop music on the rise",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=300",
      tracks: 25
    },
    {
      id: 4,
      title: "Hip Hop Central",
      description: "The best in hip hop",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&h=300",
      tracks: 41
    }
  ];

  return (
    <section className="animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Playlists</h2>
        <Button variant="ghost" className="text-music-primary hover:text-music-accent">
          See all
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredPlaylists.map((playlist) => (
          <div
            key={playlist.id}
            className="music-card group cursor-pointer"
          >
            <div className="relative mb-4">
              <img
                src={playlist.image}
                alt={playlist.title}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                <Button
                  onClick={() => onPlayTrack({ 
                    title: playlist.title, 
                    artist: "Various Artists",
                    image: playlist.image 
                  })}
                  className="bg-music-primary hover:bg-music-secondary text-white p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-200"
                >
                  <Play className="h-6 w-6 fill-current" />
                </Button>
              </div>
            </div>
            
            <h3 className="font-semibold text-white mb-1">{playlist.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{playlist.description}</p>
            <span className="text-xs text-gray-500">{playlist.tracks} tracks</span>
          </div>
        ))}
      </div>
    </section>
  );
};
