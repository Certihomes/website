import React from 'react';

interface SectionDividerProps {
  orientation?: 'top' | 'bottom';
  className?: string;
}

export default function SectionDivider({ orientation = 'top', className = '' }: SectionDividerProps) {
  return (
    <div className={`w-full h-24 relative ${className}`} />
  );
}