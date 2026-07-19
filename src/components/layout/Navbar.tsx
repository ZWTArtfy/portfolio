import { useState } from 'react';

interface NavbarProps {
  onFilterReset: () => void;
}

export default function Navbar({ onFilterReset }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleAll = () => {
    onFilterReset();
    scrollToGallery();
  };

  return (
    <nav className="sticky top-4 z-[100] flex justify-between items-center px-8 py-3 mb-8 bg-paper/85 backdrop-blur-[12px] border-[2.5px] border-doodle rounded-[30px_8px_30px_8px] shadow-doodle font-doodle relative">
      <a
        href="#"
        className="text-[1.8rem] text-ink no-underline flex items-center gap-1.5"
      >
        <span className="text-[1.5rem] animate-wiggle">⭐</span> 郑文婷的作品集
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-7 list-none flex-wrap">
        <li>
          <a
            href="#"
            className="nav-link-underline text-text-secondary no-underline text-[1.05rem] hover:text-ink transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleAll();
            }}
          >
            🏠 全部
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="nav-link-underline text-text-secondary no-underline text-[1.05rem] hover:text-ink transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToGallery();
            }}
          >
            🖼️ 作品
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="nav-link-underline text-text-secondary no-underline text-[1.05rem] hover:text-ink transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
          >
            🌸 关于
          </a>
        </li>
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden bg-none border-none text-[1.8rem] cursor-pointer font-doodle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="flex md:hidden flex-col absolute top-full left-0 right-0 bg-paper border-2 border-doodle rounded-[12px] p-6 mt-2 gap-3 list-none z-50 shadow-doodle">
          <li>
            <a
              href="#"
              className="nav-link-underline text-text-secondary no-underline text-[1.05rem] hover:text-ink transition-colors inline-block"
              onClick={(e) => {
                e.preventDefault();
                handleAll();
              }}
            >
              🏠 全部
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="nav-link-underline text-text-secondary no-underline text-[1.05rem] hover:text-ink transition-colors inline-block"
              onClick={(e) => {
                e.preventDefault();
                scrollToGallery();
              }}
            >
              🖼️ 作品
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link-underline text-text-secondary no-underline text-[1.05rem] hover:text-ink transition-colors inline-block"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
            >
              🌸 关于
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
