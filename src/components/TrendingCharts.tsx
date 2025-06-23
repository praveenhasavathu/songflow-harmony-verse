
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrendingChartsProps {
  onPlayTrack: (track: any) => void;
}

export const TrendingCharts = ({ onPlayTrack }: TrendingChartsProps) => {
  const genres = [
    {
      name: 'Pop',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&h=200'
    },
    {
      name: 'Hip Hop',
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&h=200'
    },
    {
      name: 'Rock',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=200'
    },
    {
      name: 'Electronic',
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&h=200'
    },
    {
      name: 'R&B',
      color: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&h=200'
    },
    {
      name: 'Jazz',
      color: 'from-amber-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=200'
    }
  ];

  return (
    <section className="animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Browse by Genre</h2>
        <Button variant="ghost" className="text-music-primary hover:text-music-accent">
          See all
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {genres.map((genre) => (
          <div
            key={genre.name}
            className="relative h-32 rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-200"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${genre.color}`}></div>
            <img
              src={genre.image}
              alt={genre.name}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 p-4 h-full flex flex-col justify-between">
              <h3 className="font-bold text-white text-lg">{genre.name}</h3>
              <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Button
                  onClick={() => onPlayTrack({ 
                    title: `${genre.name} Mix`, 
                    artist: "Various Artists",
                    image: genre.image 
                  })}
                  className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm"
                >
                  <Play className="h-4 w-4 fill-current" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
