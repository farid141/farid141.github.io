import { useState } from "react";

export default function MagnifyImage({ src, onClick }) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black/5"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover select-none"
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
          transform: isHovering ? "scale(2)" : "scale(1)",
          transition: "transform 0.2s ease-out",
          willChange: "transform",
          cursor: "zoom-in",
        }}
      />
    </div>
  );
}
