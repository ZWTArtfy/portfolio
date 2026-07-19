import { useState, useMemo } from 'react';
import { categories, buildAllItems } from './data/works';
import { useFilteredWorks } from './hooks/useFilteredWorks';
import { useLightbox } from './hooks/useLightbox';
import DoodleLayer from './components/decorations/DoodleLayer';
import CustomCursor from './components/decorations/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Footer from './components/layout/Footer';
import Gallery from './components/gallery/Gallery';
import Lightbox from './components/lightbox/Lightbox';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const { lightbox, open, close, navigate } = useLightbox();

  const allItems = useMemo(() => buildAllItems(), []);
  const filteredItems = useFilteredWorks(allItems, activeFilter);

  const handleFilterChange = (filterId: string | null) => {
    setActiveFilter(filterId);
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardClick = (
    items: typeof allItems,
    index: number
  ) => {
    open(items, index);
  };

  const handleFilterReset = () => {
    setActiveFilter(null);
  };

  return (
    <>
      <DoodleLayer />
      <CustomCursor />

      <div className="relative z-[1] max-w-[1400px] mx-auto p-4">
        <Navbar onFilterReset={handleFilterReset} />
        <Hero />
        <About />
        <Gallery
          categories={categories}
          allItems={allItems}
          filteredItems={filteredItems}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <Lightbox
        state={lightbox}
        onClose={close}
        onNavigate={navigate}
      />
    </>
  );
}
