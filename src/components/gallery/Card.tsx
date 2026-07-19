import type { WorkItem } from '../../types';
import { isVideo, isImage, isPdf, isPptx, getPath } from '../../utils/media';

interface CardProps {
  item: WorkItem;
  index: number;
  onClick: (items: WorkItem[], index: number) => void;
  allItems: WorkItem[];
}

const DOT_CLASSES: Record<string, string> = {
  peach: 'bg-peach',
  mint: 'bg-mint',
  sky: 'bg-sky',
  lav: 'bg-lavender',
  coral: 'bg-coral',
  yellow: 'bg-yellow',
  rose: 'bg-rose',
};

const COLOR_MAP: Record<string, string> = {
  peach: '#fde8da',
  mint: '#d8f0e8',
  sky: '#d8e8f8',
  lav: '#e8e0f5',
  coral: '#fde0e0',
  yellow: '#fdf5d8',
  rose: '#f8e4e8',
};

export default function Card({ item, index, onClick, allItems }: CardProps) {
  const { cat, fn } = item;
  const src = getPath(cat.folder, fn);
  const dotClass = DOT_CLASSES[cat.color] || 'bg-peach';
  const displayName = fn.replace(/\.[^.]+$/, '');
  const tintColor = COLOR_MAP[cat.color] || '#fde8da';

  const handleClick = () => onClick(allItems, index);

  let mediaContent: React.ReactNode;

  if (isVideo(fn)) {
    mediaContent = (
      <div className="card-media relative bg-paper-2 flex items-center justify-center min-h-[200px]">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundColor: tintColor }}
        />
        <span className="text-6xl opacity-40 relative z-0">{cat.emoji}</span>
        <div className="play-overlay">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="rgba(255,255,255,0.9)"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
            />
            <path
              d="M18 14L36 24L18 34V14Z"
              fill="rgba(0,0,0,0.55)"
              stroke="none"
            />
          </svg>
        </div>
        <span className="video-badge">▶ 视频</span>
      </div>
    );
  } else if (isImage(fn)) {
    mediaContent = (
      <div className="card-media bg-paper-2 flex items-center justify-center overflow-hidden">
        <img
          src={src}
          alt={displayName}
          loading="lazy"
          className="card-img w-full h-auto block transition-transform duration-[0.4s]"
        />
      </div>
    );
  } else if (isPdf(fn)) {
    mediaContent = (
      <div className="card-media bg-paper-2 flex items-center justify-center min-h-[180px] text-[3rem]">
        📄
      </div>
    );
  } else if (isPptx(fn)) {
    mediaContent = (
      <div className="card-media bg-paper-2 flex items-center justify-center min-h-[180px] text-[3rem]">
        📊
      </div>
    );
  } else {
    mediaContent = (
      <div className="card-media bg-paper-2 flex items-center justify-center min-h-[180px] text-2xl">
        未知文件
      </div>
    );
  }

  return (
    <div
      className="card break-inside-avoid mb-[1.2rem] bg-paper border-2 border-doodle-thin rounded-doodle overflow-hidden transition-all duration-300 relative shadow-card cursor-pointer hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-doodle-hover hover:border-peach"
      onClick={handleClick}
    >
      {mediaContent}
      <div className="card-body-dotted py-4 px-[1.2rem]">
        <h3 className="font-doodle text-[1.15rem] text-ink mb-0.5">
          {displayName}
        </h3>
        <div className="text-[0.75rem] text-text-muted flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full inline-block ${dotClass}`} />
          {cat.emoji} {cat.name}
        </div>
      </div>
    </div>
  );
}
