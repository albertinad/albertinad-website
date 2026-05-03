import { useRef } from 'react';
import { useParticles, type ParticleConfig } from '@/hooks/useParticles';

export const ParticleCanvas = (config: ParticleConfig) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useParticles(canvasRef, config);

  return (
    <canvas id="particle-canvas" ref={canvasRef} />
  );
};
