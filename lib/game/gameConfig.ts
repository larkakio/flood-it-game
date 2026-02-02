import { GameConfig, Difficulty } from '@/types/game';

/**
 * Game configuration for different difficulty levels
 */
export const GAME_CONFIGS: Record<Difficulty, GameConfig> = {
  easy: { gridSize: 12, maxMoves: 22, colorCount: 6 },
  medium: { gridSize: 18, maxMoves: 30, colorCount: 6 },
  hard: { gridSize: 24, maxMoves: 38, colorCount: 6 }
};

/**
 * Color palette for the game (vibrant neon colors)
 */
export const COLOR_PALETTE = [
  '#EF4444', // Red
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Orange
  '#8B5CF6', // Purple
  '#EC4899'  // Pink
];

/**
 * Color names for accessibility
 */
export const COLOR_NAMES = [
  'Red',
  'Blue',
  'Green',
  'Orange',
  'Purple',
  'Pink'
];
