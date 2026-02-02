'use client';

import { useMemo } from 'react';
import { Grid } from '@/types/game';
import { GameCell } from './GameCell';

interface GameBoardProps {
  grid: Grid;
}

export function GameBoard({ grid }: GameBoardProps) {
  const gridSize = grid.length;
  
  // Calculate cell size based on screen width
  const cellSize = useMemo(() => {
    if (typeof window === 'undefined') return 20;
    const screenWidth = Math.min(window.innerWidth, 600);
    const padding = 32; // Total padding
    const gap = 2; // Gap between cells
    const availableSpace = screenWidth - padding;
    return Math.floor((availableSpace - (gap * (gridSize - 1))) / gridSize);
  }, [gridSize]);

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className="grid gap-0.5 bg-gray-900 p-2 rounded-xl shadow-2xl"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <GameCell
              key={`${rowIndex}-${colIndex}`}
              color={color}
              size={cellSize}
            />
          ))
        )}
      </div>
    </div>
  );
}
