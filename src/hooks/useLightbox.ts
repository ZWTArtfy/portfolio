import { useState, useCallback, useEffect } from 'react';
import type { WorkItem, LightboxState } from '../types';

export function useLightbox() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const open = useCallback((items: WorkItem[], index: number) => {
    setLightbox({ isOpen: true, items, currentIndex: index });
  }, []);

  const close = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const navigate = useCallback((dir: number) => {
    setLightbox((prev) => {
      const newIndex =
        (prev.currentIndex + dir + prev.items.length) % prev.items.length;
      return { ...prev, currentIndex: newIndex };
    });
  }, []);

  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox.isOpen, close, navigate]);

  return { lightbox, open, close, navigate };
}
