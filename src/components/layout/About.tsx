export default function About() {
  return (
    <div id="about" className="text-center py-8 px-4 my-4">
      <div className="inline-block bg-paper border-2 border-dashed border-doodle-thin rounded-organic py-6 px-10 max-w-[550px] relative">
        <span
          className="absolute text-[2rem] opacity-60 pointer-events-none"
          style={{ top: '-1rem', left: '-0.5rem' }}
        >
          ✏️
        </span>
        <span
          className="absolute text-[2rem] opacity-60 pointer-events-none"
          style={{ bottom: '-1rem', right: '-0.5rem' }}
        >
          📎
        </span>
        <p className="font-doodle text-[1.15rem] text-ink mb-2">
          嗨！我是一个热爱创作的设计师 🌷
        </p>
        <p className="text-[0.9rem] text-text-secondary leading-[1.8]">
          这里收集了我的{' '}
          <span className="bg-mint-light px-2 py-0.5 rounded-[10px]">Blender 3D</span>、
          <span className="bg-sky-light px-2 py-0.5 rounded-[10px]">Figma UI</span>、
          <span className="bg-lavender-light px-2 py-0.5 rounded-[10px]">AE 动效</span>、
          <span className="bg-peach-light px-2 py-0.5 rounded-[10px]">虚幻引擎</span>……
          <br />
          一起在创意的花园里漫步吧 🌿
        </p>
      </div>
    </div>
  );
}
