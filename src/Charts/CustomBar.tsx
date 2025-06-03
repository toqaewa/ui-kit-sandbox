import React from 'react';

interface StripedBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
}

const STRIPE_WIDTH = 4;
const STRIPE_GAP = 4;

export const StripedBar: React.FC<StripedBarProps> = ({ x = 0, y = 0, width = 0, height = 0, fill = '#333' }) => {
  // Генерируем уникальные ID для pattern и clipPath
  const patternId = React.useMemo(() => `pattern-${Math.random().toString(36).substr(2, 9)}`, []);
  const clipPathId = React.useMemo(() => `clip-${Math.random().toString(36).substr(2, 9)}`, []);

  // Размеры pattern должны быть достаточными для покрытия
  const patternSize = STRIPE_WIDTH + STRIPE_GAP;
  const patternDiagonal = Math.sqrt(patternSize * patternSize * 2);

  return (
    <g>
      {/* Определяем pattern с полосками */}
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={patternSize}
          height={patternSize}
          patternTransform={`rotate(45 0 0)`}
        >
          <rect
            x={0}
            y={0}
            width={STRIPE_WIDTH}
            height={patternDiagonal}
            fill={fill}
          />
        </pattern>

        {/* Область обрезки по размеру бара */}
        <clipPath id={clipPathId}>
          <rect x={x} y={y} width={width} height={height} />
        </clipPath>
      </defs>

      {/* Заполняем бар с использованием pattern и clipPath */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`url(#${patternId})`}
        clipPath={`url(#${clipPathId})`}
      />
    </g>
  );
};