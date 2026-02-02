'use client';

import { motion } from 'framer-motion';
import { CellColor } from '@/types/game';
import { getColorHex, getColorName } from '@/lib/utils/colors';

interface ColorPickerProps {
  colors: CellColor[];
  currentColor: CellColor;
  onSelectColor: (color: CellColor) => void;
  disabled?: boolean;
}

export function ColorPicker({ colors, currentColor, onSelectColor, disabled = false }: ColorPickerProps) {
  const handleClick = (color: CellColor) => {
    if (!disabled && color !== currentColor) {
      onSelectColor(color);
    }
  };

  return (
    <div className="w-full px-4 py-6">
      <p className="text-center text-sm text-gray-400 mb-4">
        Select a color to expand your zone
      </p>
      
      <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {colors.map((color) => {
          const isCurrent = color === currentColor;
          const colorHex = getColorHex(color);
          const colorName = getColorName(color);

          return (
            <button
              key={color}
              onClick={() => handleClick(color)}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleClick(color);
              }}
              disabled={disabled || isCurrent}
              style={{
                backgroundColor: colorHex,
                boxShadow: isCurrent ? `0 0 30px ${colorHex}` : 'none',
                transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                opacity: disabled ? 0.5 : 1
              }}
              className={`
                min-w-[60px] h-[60px] rounded-xl transition-all duration-200
                ${isCurrent ? 'cursor-not-allowed ring-4 ring-white' : 'cursor-pointer active:scale-90 hover:scale-110'}
                ${!isCurrent && 'hover:shadow-2xl'}
              `}
              aria-label={`Select ${colorName} color`}
            >
              {isCurrent && (
                <span className="text-white text-xs font-bold">Current</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
