
import { Play, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RecentlyPlayedProps {
  onPlayTrack: (track: any) => void;
}

export const RecentlyPlayed = ({ onPlayTrack }: RecentlyPlayedProps) => {
  const recentTracks = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 3,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 4,
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      album: "F*CK LOVE 3",
      duration: "2:21",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 5,
      title: "Industry Baby",
      artist: "Lil Nas X & Jack Harlow",
      album: "MONTERO",
      duration: "3:32",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=60&h=60"
    }
  ];

  return (
    <section className="animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recently Played</h2>
        <Button variant="ghost" className="text-music-primary hover:text-music-accent">
          See all
        </Button>
      </div>

      <div className="space-y-2">
        {recentTracks.map((track, index) => (
          <div
            key={track.id}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 group transition-colors duration-200"
          >
            {/* Index */}
            <div className="w-6 text-center">
              <span className="text-gray-400 group-hover:hidden">{index + 1}</span>
              <Button
                onClick={() => onPlayTrack(track)}
                variant="ghost"
                className="hidden group-hover:flex p-0 w-6 h-6 text-white hover:text-music-primary"
              >
                <Play className="h-4 w-4 fill-current" />
              </Button>
            </div>

            {/* Album Art */}
            <img
              src={track.image}
              alt={track.title}
              className="w-12 h-12 rounded-lg"
            />

            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-white truncate">{track.title}</h4>
              <p className="text-sm text-gray-400 truncate">{track.artist}</p>
            </div>

            {/* Album */}
            <div className="hidden md:block flex-1 min-w-0">
              <p className="text-sm text-gray-400 truncate">{track.album}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button variant="ghost" className="p-2 h-8 w-8 text-gray-400 hover:text-white">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Duration */}
            <div className="text-sm text-gray-400 w-12 text-right">
              {track.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
