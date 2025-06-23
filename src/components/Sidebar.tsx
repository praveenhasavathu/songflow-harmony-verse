
import { Home, Search, Heart, ListMusic, Download, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search' },
    { icon: ListMusic, label: 'Your Library' },
  ];

  const libraryItems = [
    { icon: Heart, label: 'Liked Songs' },
    { icon: Download, label: 'Downloaded' },
    { icon: Music, label: 'Recently Played' },
  ];

  const playlists = [
    'My Playlist #1',
    'Chill Vibes',
    'Workout Mix',
    'Road Trip Songs',
    'Study Focus'
  ];

  return (
    <aside className="w-64 bg-music-darker border-r border-gray-700/50 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-music rounded-lg flex items-center justify-center">
            <Music className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient">SongFlow</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className={`w-full justify-start text-left ${
              item.active 
                ? 'bg-music-primary/20 text-music-primary hover:bg-music-primary/30' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="border-t border-gray-700/50 mt-4 pt-4">
        <div className="px-4 space-y-2">
          {libraryItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start text-left text-gray-300 hover:text-white hover:bg-white/5"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Playlists */}
      <div className="flex-1 px-4 mt-6 overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">Playlists</h3>
        <div className="space-y-1">
          {playlists.map((playlist) => (
            <Button
              key={playlist}
              variant="ghost"
              className="w-full justify-start text-left text-gray-300 hover:text-white hover:bg-white/5 font-normal"
            >
              {playlist}
            </Button>
          ))}
        </div>
      </div>

      {/* Upgrade Section */}
      <div className="p-4 m-4 bg-gradient-card rounded-xl">
        <h4 className="font-semibold mb-2">Upgrade to Premium</h4>
        <p className="text-sm text-gray-400 mb-3">
          Enjoy ad-free music and offline downloads
        </p>
        <Button className="w-full music-button">
          Get Premium
        </Button>
      </div>
    </aside>
  );
};
