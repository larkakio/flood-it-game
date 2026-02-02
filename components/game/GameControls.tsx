'use client';

import { RotateCcw, Settings, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Difficulty } from '@/types/game';

interface GameControlsProps {
  onReset: () => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onShowHelp: () => void;
  currentDifficulty: Difficulty;
  disabled?: boolean;
}

export function GameControls({
  onReset,
  onDifficultyChange,
  onShowHelp,
  currentDifficulty,
  disabled = false
}: GameControlsProps) {
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div className="w-full px-4 py-4 space-y-4">
      {/* Difficulty Selector */}
      <div className="flex items-center justify-center gap-2">
        {difficulties.map(diff => (
          <button
            key={diff}
            onClick={() => onDifficultyChange(diff)}
            disabled={disabled}
            className={`
              px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200
              ${currentDifficulty === diff
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }
              ${disabled && 'opacity-50 cursor-not-allowed'}
            `}
          >
            {diff.charAt(0).toUpperCase() + diff.slice(1)}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="secondary"
          size="sm"
          onClick={onReset}
          disabled={disabled}
          className="flex items-center gap-2"
        >
          <RotateCcw size={16} />
          Reset
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onShowHelp}
          className="flex items-center gap-2"
        >
          <HelpCircle size={16} />
          Help
        </Button>
      </div>
    </div>
  );
}
