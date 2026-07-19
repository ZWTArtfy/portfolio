import { useRef, useEffect } from 'react';
import { getPath, isMov } from '../../utils/media';
import type { WorkItem } from '../../types';

interface LightboxVideoProps {
  item: WorkItem;
}

export default function LightboxVideo({ item }: LightboxVideoProps) {
  const src = getPath(item.cat.folder, item.fn);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMovFile = isMov(item.fn);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <>
      {isMovFile ? (
        <div className="text-center p-12 text-white">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="font-doodle text-2xl mb-2">{item.fn}</p>
          <p className="text-white/70 mb-4">
            .mov 格式在大多数浏览器中无法直接播放
            <br />
            建议在本地文件夹中打开，或转换为 MP4 格式
          </p>
          <div className="text-sm text-white/50 mt-4">
            文件路径：{src}
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          preload="none"
          controls
          autoPlay
          className="block max-w-[88vw] max-h-[80vh] outline-none"
        >
          <source src={src} />
          您的浏览器不支持视频播放
        </video>
      )}
      <div className="lightbox-caption">
        {item.cat.emoji} {item.fn} · {item.cat.name}
      </div>
    </>
  );
}
