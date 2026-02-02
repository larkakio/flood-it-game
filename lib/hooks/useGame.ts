'use client';

import { useState, useCallback, useEffect } from 'react';
import { GameState, CellColor, Difficulty } from '@/types/game';
import { initializeGame, makeMove } from '@/lib/game/gameLogic';

export function useGame(initialDifficulty: Difficulty = 'easy') {
  const [gameState, setGameState] = useState<GameState>(() => 
    initializeGame(initialDifficulty)
  );

  // Select a color and make a move
  const selectColor = useCallback((color: CellColor) => {
    setGameState(currentState => makeMove(currentState, color));
  }, []);

  // Reset the game
  const resetGame = useCallback(() => {
    setGameState(initializeGame(gameState.difficulty));
  }, [gameState.difficulty]);

  // Change difficulty and restart
  const changeDifficulty = useCallback((difficulty: Difficulty) => {
    setGameState(initializeGame(difficulty));
  }, []);

  // Trigger haptic feedback (if supported)
  const triggerHaptic = useCallback((intensity: 'light' | 'medium' | 'heavy' = 'medium') => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      const patterns = {
        light: 10,
        medium: 20,
        heavy: 30
      };
      navigator.vibrate(patterns[intensity]);
    }
  }, []);

  // Trigger haptic feedback on moves
  useEffect(() => {
    if (gameState.moves > 0) {
      triggerHaptic('light');
    }
  }, [gameState.moves, triggerHaptic]);

  // Trigger celebration on win
  useEffect(() => {
    if (gameState.isWon) {
      triggerHaptic('heavy');
      // Double vibration for celebration
      setTimeout(() => triggerHaptic('heavy'), 200);
    }
  }, [gameState.isWon, triggerHaptic]);

  return {
    gameState,
    selectColor,
    resetGame,
    changeDifficulty,
    triggerHaptic
  };
}
