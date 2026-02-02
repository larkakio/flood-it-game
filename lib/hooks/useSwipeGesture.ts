'use client';

import { useState, useCallback } from 'react';
import { SwipeDirection } from '@/types/game';

interface UseSwipeGestureProps {
  onSwipe: (direction: SwipeDirection) => void;
  minSwipeDistance?: number;
}

export function useSwipeGesture({ 
  onSwipe, 
  minSwipeDistance = 50 
}: UseSwipeGestureProps) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    
    const absDistanceX = Math.abs(distanceX);
    const absDistanceY = Math.abs(distanceY);

    // Determine if swipe is primarily horizontal or vertical
    if (absDistanceX > absDistanceY) {
      // Horizontal swipe
      if (absDistanceX >= minSwipeDistance) {
        onSwipe(distanceX > 0 ? 'left' : 'right');
      }
    } else {
      // Vertical swipe
      if (absDistanceY >= minSwipeDistance) {
        onSwipe(distanceY > 0 ? 'up' : 'down');
      }
    }
  }, [touchStart, touchEnd, minSwipeDistance, onSwipe]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}
