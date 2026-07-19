import { getPath } from '../../utils/media';
import type { WorkItem } from '../../types';

interface LightboxDownloadProps {
  item: WorkItem;
}

export default function LightboxDownload({ item }: LightboxDownloadProps) {
  const src = getPath(item.cat.folder, item.fn);

  return (
    <div className="p-12 text-center">
      <div className="text-[5rem] mb-4">
        {/\.pdf$/i.test(item.fn) ? '📄' : '📊'}
      </div>
      <p className="font-doodle text-[1.3rem] text-ink">{item.fn}</p>
      <p className="text-text-secondary mt-2">
        此文件类型无法在浏览器中预览，请下载后在本地打开
      </p>
      <a
        href={src}
        download
        className="inline-block mt-4 py-2.5 px-6 bg-peach text-white rounded-[20px] no-underline font-doodle hover:bg-peach-dark transition-colors"
      >
        📥 下载文件
      </a>
      <div className="text-text-muted text-sm mt-6">{item.cat.emoji} {item.cat.name}</div>
    </div>
  );
}
