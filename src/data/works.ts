import type { Category, WorkItem } from '../types';

export const categories: Category[] = [
  {
    id: 'ae',
    name: 'AE 动效展示',
    emoji: '🎬',
    folder: 'ae-show',
    desc: 'After Effects 动态设计',
    color: 'lav',
    files: ['6e489d6b256ab27580f9f26683ba5ce5.jpg', 'ae-show-video.mp4'],
  },
  {
    id: 'blender',
    name: 'Blender 设计展示',
    emoji: '🍰',
    folder: 'blender-design',
    desc: '3D 建模与渲染',
    color: 'peach',
    files: [
      'final-cup.jpg', 'cup-poster.jpg', 'detail-view.jpg',
      'strawberry-cake.jpg', 'strawberry-cake-poster.jpg', 'cake-modeling.jpg',
    ],
  },
  {
    id: 'figma',
    name: 'Figma 交互 UI 设计',
    emoji: '📱',
    folder: 'figma-ui-design',
    desc: 'UI 界面与交互原型',
    color: 'mint',
    files: [
      'Frame 6812.jpg', 'Group 6838.png',
      'Slide 16_9 - 1.jpg', 'Slide 16_9 - 10.jpg', 'Slide 16_9 - 11.jpg',
      'Slide 16_9 - 4.jpg', 'Slide 16_9 - 5.jpg', 'Slide 16_9 - 7.jpg',
      'Slide 16_9 - 8.jpg', 'Slide 16_9 - 9.jpg',
      'profile-page.jpg', 'home-page.jpg', 'yunbei.mp4', 'yunbei.pdf', 'yunbei.pptx',
      'lo-fi.jpg', 'lo-fi-1.jpg', 'lo-fi-2.jpg', 'lo-fi-3.jpg', 'lo-fi-4.jpg',
      'category-page.jpg', 'friends-page.jpg', 'tool-swap-page.jpg', 'mentor-page.jpg',
      'post-publish-page.jpg', 'start-page.jpg', 'recommend-page.jpg', 'tutorial-page.jpg',
      'login-page.jpg', 'social-square-page.jpg', 'team-baking-page.jpg',
      'chat-page.jpg', 'timer-page.jpg',
    ],
  },
  {
    id: 'illustrator',
    name: 'Illustrator 设计展示',
    emoji: '🖌️',
    folder: 'illustrator-design',
    desc: '矢量插画与海报',
    color: 'coral',
    files: [
      'hamster-party.jpg', 'element-split-15.jpg', 'element-split-2-16.jpg',
      'element-split-3-17.jpg', 'building-copy.jpg',
      'wechat-image-20250625225542.jpg', 'poster-19.jpg',
      'poster-1.jpg', 'poster-3.jpg', 'poster-2.jpg',
    ],
  },
  {
    id: 'touchdesigner',
    name: 'TouchDesigner 设计展示',
    emoji: '🔮',
    folder: 'touchdesigner-design',
    desc: '生成艺术与交互视觉',
    color: 'sky',
    files: ['TDMovieOut.0.mov', 'interactive-poster.mp4', 'water-wave-poster.jpg'],
  },
  {
    id: 'brand',
    name: '品牌与字体设计',
    emoji: '✒️',
    folder: 'brand-font-design',
    desc: '品牌识别与字体',
    color: 'yellow',
    files: ['font-and-brand.jpg', 'font-standard.jpg', 'mockup-display.jpg', 'poster.jpg'],
  },
  {
    id: 'unreal',
    name: '虚幻引擎展示',
    emoji: '🏯',
    folder: 'unreal-engine',
    desc: 'Unreal Engine 场景',
    color: 'rose',
    files: [
      'ScreenShot00000 (1).png', 'ScreenShot00000 (2).png',
      'ScreenShot00000 (3).png', 'ScreenShot00000 (4).png',
      'ScreenShot00000 (5).png', 'ScreenShot00000 (6).png',
      'Shot01.jpg', 'Shot02.jpg', 'Shot03.jpg', 'misty-zen-temple.mp4',
    ],
  },
];

export function buildAllItems(): WorkItem[] {
  const items: WorkItem[] = [];
  categories.forEach((cat) => {
    cat.files.forEach((fn) => {
      if (isVisual(fn)) {
        items.push({ cat, fn });
      }
    });
  });
  return items;
}

function isVisual(fn: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|bmp|svg|mp4|mov|webm|ogg|pdf|pptx)$/i.test(fn);
}
