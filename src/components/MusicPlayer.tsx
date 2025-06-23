
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Shuffle, Volume } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface Track {
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
}

interface MusicPlayerProps {
  track: Track;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export const MusicPlayer = ({ track, isPlaying, onPlayPause }: MusicPlayerProps) => {
  const [progress, setProgress] = useState([30]);
  const [volume, setVolume] = useState([70]);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-music-darker/95 backdrop-blur-lg border-t border-gray-700/50 p-4 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Track Info */}
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <img
            src={track.image}
            alt={track.title}
            className="w-14 h-14 rounded-lg shadow-lg"
          />
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-white truncate">{track.title}</h4>
            <p className="text-sm text-gray-400 truncate">{track.artist}</p>
          </div>
          <Button
            onClick={() => setIsLiked(!isLiked)}
            variant="ghost"
            className={`p-2 ${isLiked ? 'text-music-accent' : 'text-gray-400'} hover:text-white`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
          {/* Control Buttons */}
          <div className="flex items-center space-x-6">
            <Button
              onClick={() => setIsShuffled(!isShuffled)}
              variant="ghost"
              className={`p-2 ${isShuffled ? 'text-music-primary' : 'text-gray-400'} hover:text-white`}
            >
              <Shuffle className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" className="p-2 text-gray-400 hover:text-white">
              <SkipBack className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={onPlayPause}
              className="bg-white text-black hover:bg-gray-200 w-10 h-10 rounded-full p-0 flex items-center justify-center"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="h-5 w-5 fill-current ml-0.5" />
              )}
            </Button>
            
            <Button variant="ghost" className="p-2 text-gray-400 hover:text-white">
              <SkipForward className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" className="p-2 text-gray-400 hover:text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 16M4 20l16-16" />
              </svg>
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-gray-400">1:23</span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-gray-400">{track.duration}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 flex-1 justify-end">
          <Volume className="h-4 w-4 text-gray-400" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};
