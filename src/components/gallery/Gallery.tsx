import type { Category, WorkItem } from '../../types';
import SectionHeader from '../decorations/SectionHeader';
import FilterBar from './FilterBar';
import MasonryGrid from './MasonryGrid';

interface GalleryProps {
  categories: Category[];
  allItems: WorkItem[];
  filteredItems: WorkItem[];
  activeFilter: string | null;
  onFilterChange: (filterId: string | null) => void;
  onCardClick: (items: WorkItem[], index: number) => void;
}

export default function Gallery({
  categories,
  allItems,
  filteredItems,
  activeFilter,
  onFilterChange,
  onCardClick,
}: GalleryProps) {
  return (
    <div id="gallery">
      <SectionHeader
        emoji="🎨"
        title="作品集锦"
        desc="点击任意卡片查看大图 / 播放视频"
      />
      <FilterBar
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        totalCount={allItems.length}
      />
      <MasonryGrid items={filteredItems} onCardClick={onCardClick} />
    </div>
  );
}
