import React from 'react';

interface WaveDividerProps {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
}

export default function WaveDivider({ color = 'text-white', position = 'bottom', className = '' }: WaveDividerProps) {
  const isTop = position === 'top';
  
  return (
    <div className={`absolute left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none ${isTop ? 'top-[-1px]' : 'bottom-[-1px] rotate-180'} ${className}`}>
      <svg 
        className={`relative block w-[calc(100%+2px)] h-[40px] md:h-[60px] ${color}`} 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
      </svg>
    </div>
  );
}
