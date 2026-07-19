export default function Hero() {
  return (
    <header className="text-center py-16 px-4 relative">
      <div>
        <h1 className="font-doodle text-[clamp(2.2rem,6vw,4.5rem)] text-ink mb-3 leading-[1.3]">
          欢迎来到
          <br />
          我的
          <span className="inline-block px-2 py-0.5 rounded-[8px_20px_8px_20px] bg-mint-light">
            作品集
          </span>
        </h1>
      </div>
      <p className="hero-subtitle text-[1.1rem] text-text-secondary max-w-[600px] mx-auto mb-8 inline-block">
        每一件作品都是一颗小星星，散落在手绘的画册里 ✨
      </p>
      <div className="flex justify-center gap-4 text-[1.5rem] mt-6 animate-fade-in-up">
        🎨 🖌️ 🔮 📱 🍰
      </div>
    </header>
  );
}
