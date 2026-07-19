import { useCustomCursor } from '../../hooks/useCustomCursor';

export default function CustomCursor() {
  const { x, y } = useCustomCursor();

  if (x < 0 || y < 0) return null;

  return (
    <div
      className="custom-cursor-dot"
      style={{ left: `${x}px`, top: `${y}px` }}
    />
  );
}
