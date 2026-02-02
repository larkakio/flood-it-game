/**
 * Game Types for Flood It
 */

export type CellColor = 0 | 1 | 2 | 3 | 4 | 5;
export type Grid = CellColor[][];
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
  gridSize: number;
  maxMoves: number;
  colorCount: number;
}

export interface GameState {
  grid: Grid;
  currentColor: CellColor;
  moves: number;
  maxMoves: number;
  isWon: boolean;
  isLost: boolean;
  isPlaying: boolean;
  difficulty: Difficulty;
}

export interface Position {
  row: number;
  col: number;
}

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';
