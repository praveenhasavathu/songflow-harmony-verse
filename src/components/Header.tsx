
import { Search, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Header = () => {
  return (
    <header className="glass-effect border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2 rounded-full">
              ←
            </Button>
            <Button variant="ghost" size="sm" className="p-2 rounded-full">
              →
            </Button>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search songs, artists, albums..."
              className="pl-10 bg-music-dark/50 border-gray-600 focus:border-music-primary text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Right side - User actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="p-2 rounded-full hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 rounded-full hover:bg-white/10">
            <Settings className="h-5 w-5" />
          </Button>
          
          {/* User Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-music flex items-center justify-center">
            <span className="text-sm font-semibold">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};
