import { Grid, CellColor } from '@/types/game';

/**
 * Flood fill algorithm using iterative BFS (Breadth-First Search)
 * This avoids stack overflow issues with large grids
 * 
 * @param grid - The current game grid
 * @param startRow - Starting row (usually 0)
 * @param startCol - Starting column (usually 0)
 * @param newColor - The color to fill with
 * @returns A new grid with the flood fill applied
 */
export function floodFill(
  grid: Grid,
  startRow: number,
  startCol: number,
  newColor: CellColor
): Grid {
  const oldColor = grid[startRow][startCol];
  
  // No change needed if colors are the same
  if (oldColor === newColor) {
    return grid;
  }
  
  // Create a new grid (immutable approach)
  const newGrid: Grid = grid.map(row => [...row]);
  
  // BFS queue and visited set
  const queue: [number, number][] = [[startRow, startCol]];
  const visited = new Set<string>();
  
  while (queue.length > 0) {
    const [row, col] = queue.shift()!;
    const key = `${row},${col}`;
    
    // Skip if already visited
    if (visited.has(key)) continue;
    visited.add(key);
    
    // Check bounds
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      continue;
    }
    
    // Fill if it matches the old color
    if (newGrid[row][col] === oldColor) {
      newGrid[row][col] = newColor;
      
      // Add all four neighbors to queue
      queue.push([row - 1, col]); // Up
      queue.push([row + 1, col]); // Down
      queue.push([row, col - 1]); // Left
      queue.push([row, col + 1]); // Right
    }
  }
  
  return newGrid;
}

/**
 * Check if the entire grid is filled with a single color
 */
export function isGridComplete(grid: Grid): boolean {
  if (grid.length === 0 || grid[0].length === 0) return false;
  
  const targetColor = grid[0][0];
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] !== targetColor) {
        return false;
      }
    }
  }
  
  return true;
}

/**
 * Count how many cells match a specific color
 */
export function countColorCells(grid: Grid, color: CellColor): number {
  let count = 0;
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === color) {
        count++;
      }
    }
  }
  
  return count;
}
