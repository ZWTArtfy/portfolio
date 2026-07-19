interface SectionHeaderProps {
  emoji: string;
  title: string;
  desc?: string;
}

export default function SectionHeader({ emoji, title, desc }: SectionHeaderProps) {
  return (
    <div className="text-center my-16 mx-0 relative">
      <span className="block text-[2.5rem] mb-2 animate-bounce-emoji">
        {emoji}
      </span>
      <h2 className="section-title-decorated font-doodle text-[2.2rem] text-ink">
        {title}
      </h2>
      {desc && (
        <p className="text-text-muted text-[0.9rem] mt-1">{desc}</p>
      )}
    </div>
  );
}
