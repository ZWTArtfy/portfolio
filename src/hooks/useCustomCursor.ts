import { useState, useEffect } from 'react';

interface CursorState {
  x: number;
  y: number;
}

export function useCustomCursor() {
  const [pos, setPos] = useState<CursorState>({ x: -20, y: -20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX - 6, y: e.clientY - 6 });
    };

    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return pos;
}
