import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
      setDotPosition({ x: e.clientX - 2, y: e.clientY - 2 });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <div
        className="cursor-dot"
        style={{ transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)` }}
      />
    </>
  );
};

export default Cursor;