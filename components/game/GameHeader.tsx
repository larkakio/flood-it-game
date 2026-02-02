'use client';

import { motion } from 'framer-motion';
import { Trophy, Target, Zap } from 'lucide-react';
import { GameState } from '@/types/game';
import { calculateProgress, getRemainingMoves } from '@/lib/game/gameLogic';

interface GameHeaderProps {
  gameState: GameState;
}

export function GameHeader({ gameState }: GameHeaderProps) {
  const remainingMoves = getRemainingMoves(gameState);
  const progress = calculateProgress(gameState.grid);
  const isLowMoves = remainingMoves <= 5 && remainingMoves > 0;

  return (
    <div className="w-full px-4 py-4 bg-gradient-to-b from-gray-900 to-transparent">
      {/* Stats Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Moves */}
        <div className="flex items-center gap-2">
          <Target className="text-blue-400" size={20} />
          <div>
            <p className="text-xs text-gray-400">Moves</p>
            <p className={`text-xl font-bold ${isLowMoves ? 'text-red-400' : 'text-white'}`}>
              {gameState.moves} / {gameState.maxMoves}
            </p>
          </div>
        </div>

        {/* Difficulty */}
        <div className="flex items-center gap-2">
          <Zap className="text-purple-400" size={20} />
          <div>
            <p className="text-xs text-gray-400">Difficulty</p>
            <p className="text-xl font-bold text-white capitalize">
              {gameState.difficulty}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2">
          <Trophy className="text-yellow-400" size={20} />
          <div>
            <p className="text-xs text-gray-400">Progress</p>
            <p className="text-xl font-bold text-white">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* Low moves warning */}
      {isLowMoves && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-2 bg-red-500/20 border border-red-500 rounded-lg text-center"
        >
          <p className="text-sm text-red-300 font-semibold">
            ⚠️ Only {remainingMoves} moves remaining!
          </p>
        </motion.div>
      )}
    </div>
  );
}
