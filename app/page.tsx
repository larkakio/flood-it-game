'use client';

import { useState, useEffect } from 'react';
import { useGame } from '@/lib/hooks/useGame';
import { GameBoard } from '@/components/game/GameBoard';
import { GameHeader } from '@/components/game/GameHeader';
import { ColorPicker } from '@/components/game/ColorPicker';
import { GameControls } from '@/components/game/GameControls';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { CellColor } from '@/types/game';
import { Trophy, XCircle, Share2 } from 'lucide-react';

export default function Home() {
  const { gameState, selectColor, resetGame, changeDifficulty } = useGame('easy');
  const [showHelp, setShowHelp] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const colors: CellColor[] = [0, 1, 2, 3, 4, 5];

  const handleColorSelect = (color: CellColor) => {
    selectColor(color);
  };

  const handleShare = () => {
    const text = gameState.isWon
      ? `🎉 I won Flood It on ${gameState.difficulty} mode in ${gameState.moves} moves! Can you beat that?`
      : `I'm playing Flood It! Try to beat my score!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Flood It Game',
        text: text,
        url: window.location.href
      });
    }
  };

  // Show result modal when game ends
  useEffect(() => {
    if ((gameState.isWon || gameState.isLost) && !showResult) {
      setShowResult(true);
    }
  }, [gameState.isWon, gameState.isLost, showResult]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col">
      {/* Header */}
      <header className="text-center pt-8 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
          Flood It
        </h1>
        <p className="text-gray-400 text-sm">Fill the board with one color!</p>
      </header>

      {/* Game Stats */}
      <GameHeader gameState={gameState} />

      {/* Game Board */}
      <main className="flex-1 flex items-center justify-center">
        <GameBoard grid={gameState.grid} />
      </main>

      {/* Color Picker */}
      <ColorPicker
        colors={colors}
        currentColor={gameState.currentColor}
        onSelectColor={handleColorSelect}
        disabled={!gameState.isPlaying}
      />

      {/* Controls */}
      <GameControls
        onReset={resetGame}
        onDifficultyChange={changeDifficulty}
        onShowHelp={() => setShowHelp(true)}
        currentDifficulty={gameState.difficulty}
        disabled={false}
      />

      {/* Help Modal */}
      <Modal isOpen={showHelp} onClose={() => setShowHelp(false)} title="How to Play">
        <div className="space-y-4 text-gray-300">
          <p>
            <strong className="text-white">Goal:</strong> Fill the entire board with a single color within the move limit.
          </p>
          <p>
            <strong className="text-white">How to play:</strong> Tap or swipe to select a color. All adjacent cells of that color will join your flood zone (starting from top-left).
          </p>
          <p>
            <strong className="text-white">Strategy:</strong> Choose colors that maximize your expansion and work towards corners.
          </p>
          <div className="pt-4">
            <p className="text-sm text-gray-400">
              <strong>Easy:</strong> 12×12 grid, 22 moves<br />
              <strong>Medium:</strong> 18×18 grid, 30 moves<br />
              <strong>Hard:</strong> 24×24 grid, 38 moves
            </p>
          </div>
        </div>
      </Modal>

      {/* Win/Loss Modal */}
      <Modal
        isOpen={showResult}
        onClose={() => {
          setShowResult(false);
          resetGame();
        }}
        title={gameState.isWon ? '🎉 You Won!' : '😞 Game Over'}
      >
        <div className="text-center space-y-6">
          {gameState.isWon ? (
            <>
              <Trophy className="mx-auto text-yellow-400" size={64} />
              <p className="text-gray-300 text-lg">
                Congratulations! You completed the {gameState.difficulty} level in{' '}
                <strong className="text-white">{gameState.moves}</strong> moves!
              </p>
            </>
          ) : (
            <>
              <XCircle className="mx-auto text-red-400" size={64} />
              <p className="text-gray-300 text-lg">
                You ran out of moves! Better luck next time.
              </p>
            </>
          )}

          <div className="flex gap-3 justify-center">
            <Button onClick={handleShare} variant="secondary">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
            <Button
              onClick={() => {
                setShowResult(false);
                resetGame();
              }}
            >
              Play Again
            </Button>
          </div>
        </div>
      </Modal>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-xs">
        Built with ❤️ for Base Mini Apps
      </footer>
    </div>
  );
}
