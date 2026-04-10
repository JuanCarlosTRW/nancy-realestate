"use client";
import { useRef, useState, useEffect, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

/**
 * Subtle 3D tilt card. Disabled on touch/mobile devices.
 */
export default function TiltCard({
  children,
  className = "",
  rotateAmplitude = 6,
  scaleOnHover = 1.03,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchDevice || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTransform(
        `perspective(800px) rotateX(${-y * rotateAmplitude}deg) rotateY(${x * rotateAmplitude}deg) scale(${scaleOnHover})`
      );
    },
    [isTouchDevice, rotateAmplitude, scaleOnHover]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition: "transform 300ms ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
