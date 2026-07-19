import { createPortal } from 'react-dom';
import type { LightboxState, WorkItem } from '../../types';
import { isVideo, isPdf, isPptx } from '../../utils/media';
import LightboxImage from './LightboxImage';
import LightboxVideo from './LightboxVideo';
import LightboxDownload from './LightboxDownload';

interface LightboxProps {
  state: LightboxState;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}

export default function Lightbox({ state, onClose, onNavigate }: LightboxProps) {
  if (!state.isOpen) return null;

  const currentItem = state.items[state.currentIndex];
  if (!currentItem) return null;

  const renderContent = (item: WorkItem) => {
    if (isVideo(item.fn)) {
      return <LightboxVideo item={item} />;
    }
    if (isPdf(item.fn) || isPptx(item.fn)) {
      return <LightboxDownload item={item} />;
    }
    return <LightboxImage item={item} />;
  };

  return createPortal(
    <>
      {/* Close button */}
      <button className="lightbox-close-btn" onClick={onClose}>
        ✕
      </button>

      {/* Previous button */}
      {state.items.length > 1 && (
        <button
          className="lightbox-nav-btn"
          style={{ left: '1.5rem' }}
          onClick={() => onNavigate(-1)}
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {state.items.length > 1 && (
        <button
          className="lightbox-nav-btn"
          style={{ right: '1.5rem' }}
          onClick={() => onNavigate(1)}
        >
          ›
        </button>
      )}

      {/* Overlay */}
      <div
        className="fixed inset-0 z-[999] flex justify-center items-center p-8 bg-[rgba(60,45,30,0.88)]"
        style={{ backdropFilter: 'blur(10px)' }}
        onClick={onClose}
      >
        <div
          className="relative max-w-[90vw] max-h-[85vh] bg-paper border-[3px] border-doodle rounded-organic overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-pop-in"
          onClick={(e) => e.stopPropagation()}
        >
          {renderContent(currentItem)}
        </div>
      </div>
    </>,
    document.body
  );
}
