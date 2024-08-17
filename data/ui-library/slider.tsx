"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  valueClassName?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onChange = () => { console.log('Slider value:', value); },
  className,
  valueClassName,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        className={cn("w-full h-2 bg-muted-foreground accent-accent-foreground rounded-full appearance-none cursor-pointer", className)}
      />
      <span className={cn("flex justify-center w-full text-sm text-muted-foreground mt-2", valueClassName)}>
        {currentValue}
      </span>
    </div>
  );
};

export default Slider;