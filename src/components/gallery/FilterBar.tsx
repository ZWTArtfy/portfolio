import type { Category } from '../../types';

interface FilterBarProps {
  categories: Category[];
  activeFilter: string | null;
  onFilterChange: (filterId: string | null) => void;
  totalCount: number;
}

export default function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
  totalCount,
}: FilterBarProps) {
  return (
    <div className="flex justify-center flex-wrap gap-2.5 mb-8">
      <button
        className={`font-doodle text-[0.9rem] py-[0.45rem] px-[1.2rem] border-2 border-doodle-thin rounded-[20px] bg-paper text-text-secondary cursor-pointer transition-all duration-[0.25s] hover:-translate-y-0.5 ${
          activeFilter === null
            ? '!border-peach !bg-peach-light !text-ink -translate-y-0.5'
            : ''
        }`}
        onClick={() => onFilterChange(null)}
      >
        🌟 全部
        <span className="text-[0.7rem] text-text-muted ml-0.5">
          ({totalCount})
        </span>
      </button>
      {categories.map((cat) => {
        const visualCount = cat.files.filter((f) =>
          /\.(jpg|jpeg|png|gif|webp|bmp|svg|mp4|mov|webm|ogg|pdf|pptx)$/i.test(f)
        ).length;
        return (
          <button
            key={cat.id}
            className={`font-doodle text-[0.9rem] py-[0.45rem] px-[1.2rem] border-2 border-doodle-thin rounded-[20px] bg-paper text-text-secondary cursor-pointer transition-all duration-[0.25s] hover:-translate-y-0.5 ${
              activeFilter === cat.id
                ? '!border-peach !bg-peach-light !text-ink -translate-y-0.5'
                : ''
            }`}
            onClick={() => onFilterChange(cat.id)}
          >
            {cat.emoji} {cat.name}
            <span className="text-[0.7rem] text-text-muted ml-0.5">
              ({visualCount})
            </span>
          </button>
        );
      })}
    </div>
  );
}
