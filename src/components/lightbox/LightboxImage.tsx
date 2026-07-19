import { getPath } from '../../utils/media';
import type { WorkItem } from '../../types';

interface LightboxImageProps {
  item: WorkItem;
}

export default function LightboxImage({ item }: LightboxImageProps) {
  const src = getPath(item.cat.folder, item.fn);
  return (
    <>
      <img
        src={src}
        alt={item.fn}
        className="block max-w-[88vw] max-h-[80vh] object-contain"
      />
      <div className="lightbox-caption">
        {item.cat.emoji} {item.fn} · {item.cat.name}
      </div>
    </>
  );
}
