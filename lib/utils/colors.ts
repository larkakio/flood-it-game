import { CellColor } from '@/types/game';
import { COLOR_PALETTE, COLOR_NAMES } from '@/lib/game/gameConfig';

/**
 * Get hex color from cell color index
 */
export function getColorHex(color: CellColor): string {
  return COLOR_PALETTE[color];
}

/**
 * Get color name from cell color index
 */
export function getColorName(color: CellColor): string {
  return COLOR_NAMES[color];
}

/**
 * Generate a glow effect for a color
 */
export function getColorGlow(color: CellColor, intensity: number = 0.5): string {
  const hex = getColorHex(color);
  return `0 0 ${20 * intensity}px ${hex}`;
}

/**
 * Get contrasting text color (black or white) for a background color
 */
export function getContrastColor(hexColor: string): string {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}
