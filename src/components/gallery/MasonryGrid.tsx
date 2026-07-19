import type { WorkItem } from '../../types';
import Card from './Card';

interface MasonryGridProps {
  items: WorkItem[];
  onCardClick: (items: WorkItem[], index: number) => void;
}

export default function MasonryGrid({ items, onCardClick }: MasonryGridProps) {
  return (
    <>
      <style>{`
        .masonry-grid {
          columns: 3;
          column-gap: 1.2rem;
        }
        @media (max-width: 1100px) {
          .masonry-grid { columns: 2 !important; }
        }
        @media (max-width: 700px) {
          .masonry-grid { columns: 1 !important; }
        }
      `}</style>
      <div className="masonry-grid mx-auto">
        {items.map((item, idx) => (
          <Card
            key={`${item.cat.id}-${item.fn}`}
            item={item}
            index={idx}
            onClick={onCardClick}
            allItems={items}
          />
        ))}
      </div>
    </>
  );
}
