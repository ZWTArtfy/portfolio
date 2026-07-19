export default function Footer() {
  return (
    <footer className="text-center py-12 px-6 mt-12 border-t-2 border-dashed border-doodle-thin relative">
      <div className="flex justify-center gap-6 text-[2rem] mb-4">⭐</div>
      <p className="text-text-muted text-[0.85rem]">
        用热爱浇灌每一个像素 · 来自{' '}
        <span className="font-doodle text-peach text-[1.3rem]">小艺术家</span>{' '}
        的画册
      </p>
      <p className="mt-1 text-[0.7rem] text-text-muted">
        Made with 💖 and lots of doodles
      </p>
    </footer>
  );
}
