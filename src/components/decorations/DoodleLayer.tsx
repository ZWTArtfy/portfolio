import { useMemo } from 'react';

const PLANET_TYPES = [
  'planet-peach',
  'planet-lav',
  'planet-mint',
  'planet-sky',
  'planet-yellow',
  'planet-rose',
] as const;

const PETAL_EMOJIS = ['🌸', '🌷', '🌼', '✿', '🌺', '💮', '🏵️', '🌾', '🍃', '🌿'];

interface PlanetConfig {
  id: number;
  type: string;
  size: number;
  x: number;
  y: number;
  dur: number;
  delay: number;
  ringColor: string;
  craterColor: string;
}

interface PetalConfig {
  id: number;
  emoji: string;
  size: number;
  x: number;
  y: number;
  dur: number;
  delay: number;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function generatePlanets(): PlanetConfig[] {
  return Array.from({ length: 20 }, (_, i) => {
    const s1 = seededRandom(i * 7 + 1);
    const s2 = seededRandom(i * 13 + 3);
    const s3 = seededRandom(i * 17 + 5);
    const s4 = seededRandom(i * 23 + 7);
    const s5 = seededRandom(i * 29 + 9);
    return {
      id: i,
      type: PLANET_TYPES[Math.floor(s1 * PLANET_TYPES.length)],
      size: 28 + s2 * 40,
      x: s3 * 100,
      y: 5 + s4 * 90,
      dur: 25 + s5 * 40,
      delay: s1 * -30,
      ringColor: s2 > 0.3 ? 'rgba(180,160,140,0.5)' : 'transparent',
      craterColor: s3 > 0.4 ? 'rgba(140,110,90,0.25)' : 'transparent',
    };
  });
}

function generatePetals(): PetalConfig[] {
  return Array.from({ length: 40 }, (_, i) => {
    const s1 = seededRandom(i * 31 + 13);
    const s2 = seededRandom(i * 37 + 17);
    const s3 = seededRandom(i * 41 + 19);
    const s4 = seededRandom(i * 43 + 23);
    return {
      id: i,
      emoji: PETAL_EMOJIS[Math.floor(s1 * PETAL_EMOJIS.length)],
      size: 12 + s2 * 16,
      x: s3 * 98,
      y: s4 * 95,
      dur: 15 + s1 * 35,
      delay: s2 * -30,
    };
  });
}

export default function DoodleLayer() {
  const planets = useMemo(() => generatePlanets(), []);
  const petals = useMemo(() => generatePetals(), []);

  return (
    <div
      className="doodle-layer"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {planets.map((p) => (
        <div
          key={p.id}
          className={`doodle-planet ${p.type}`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            '--drift-dur': `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            '--ring-color': p.ringColor,
            '--crater-color': p.craterColor,
            '--r': `${p.size}px`,
          } as React.CSSProperties}
        />
      ))}
      {petals.map((p) => (
        <span
          key={`petal-${p.id}`}
          className="doodle-petal"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            '--size': `${p.size}px`,
            fontSize: `${p.size}px`,
            '--drift-dur': `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
