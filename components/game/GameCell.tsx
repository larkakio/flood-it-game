'use client';

import { CellColor } from '@/types/game';
import { getColorHex } from '@/lib/utils/colors';

interface GameCellProps {
  color: CellColor;
  size: number;
}

export function GameCell({ color, size }: GameCellProps) {
  const colorHex = getColorHex(color);
  
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: colorHex,
        transition: 'background-color 0.4s ease-in-out'
      }}
      className="rounded-md shadow-sm"
    />
  );
}
