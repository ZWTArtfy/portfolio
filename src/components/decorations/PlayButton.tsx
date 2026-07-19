import type { WorkItem } from '../../types';

interface PlayButtonProps {
  onClick: (item: WorkItem, index: number) => void;
  item: WorkItem;
  index: number;
}

export default function PlayButton({ onClick, item, index }: PlayButtonProps) {
  return (
    <div className="play-overlay">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
}
