import { Grid, CellColor, Difficulty, GameState } from '@/types/game';
import { GAME_CONFIGS } from './gameConfig';
import { floodFill, isGridComplete } from './floodFill';

/**
 * Generate a random grid filled with colors
 */
export function generateGrid(size: number, colorCount: number): Grid {
  const grid: Grid = [];
  
  for (let row = 0; row < size; row++) {
    const rowCells: CellColor[] = [];
    for (let col = 0; col < size; col++) {
      const randomColor = Math.floor(Math.random() * colorCount) as CellColor;
      rowCells.push(randomColor);
    }
    grid.push(rowCells);
  }
  
  return grid;
}

/**
 * Initialize a new game state
 */
export function initializeGame(difficulty: Difficulty): GameState {
  const config = GAME_CONFIGS[difficulty];
  const grid = generateGrid(config.gridSize, config.colorCount);
  const currentColor = grid[0][0];
  
  return {
    grid,
    currentColor,
    moves: 0,
    maxMoves: config.maxMoves,
    isWon: false,
    isLost: false,
    isPlaying: true,
    difficulty
  };
}

/**
 * Process a color selection move
 */
export function makeMove(state: GameState, selectedColor: CellColor): GameState {
  // Can't make moves if game is over or color is the same
  if (!state.isPlaying || selectedColor === state.currentColor) {
    return state;
  }
  
  // Apply flood fill
  const newGrid = floodFill(state.grid, 0, 0, selectedColor);
  const newMoves = state.moves + 1;
  
  // Check win condition
  const isWon = isGridComplete(newGrid);
  
  // Check lose condition
  const isLost = !isWon && newMoves >= state.maxMoves;
  
  return {
    ...state,
    grid: newGrid,
    currentColor: selectedColor,
    moves: newMoves,
    isWon,
    isLost,
    isPlaying: !isWon && !isLost
  };
}

/**
 * Calculate progress percentage
 */
export function calculateProgress(grid: Grid): number {
  if (grid.length === 0) return 0;
  
  const targetColor = grid[0][0];
  let matchingCells = 0;
  let totalCells = 0;
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      totalCells++;
      if (grid[row][col] === targetColor) {
        matchingCells++;
      }
    }
  }
  
  return totalCells > 0 ? (matchingCells / totalCells) * 100 : 0;
}

/**
 * Get remaining moves
 */
export function getRemainingMoves(state: GameState): number {
  return Math.max(0, state.maxMoves - state.moves);
}
