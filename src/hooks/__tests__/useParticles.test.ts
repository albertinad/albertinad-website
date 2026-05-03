import { jest } from '@jest/globals';
import { renderHook } from '@testing-library/react';
import { useParticles } from '../useParticles';
import type { ParticleConfig } from '../useParticles';

const defaultConfig: ParticleConfig = {
  accentColor: '#22c55e',
  density: 100,
  speed: 0.5,
  connDist: 10000,
  theme: 'light',
};

type MockCtx = {
  clearRect: ReturnType<typeof jest.fn>;
  beginPath: ReturnType<typeof jest.fn>;
  arc: ReturnType<typeof jest.fn>;
  fill: ReturnType<typeof jest.fn>;
  moveTo: ReturnType<typeof jest.fn>;
  lineTo: ReturnType<typeof jest.fn>;
  stroke: ReturnType<typeof jest.fn>;
  fillStyle: string;
  strokeStyle: string;
  lineWidth: number;
};

describe('useParticles', () => {
  let mockCtx: MockCtx;

  beforeEach(() => {
    mockCtx = {
      clearRect: jest.fn(),
      beginPath: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 0,
    };

    jest
      .spyOn(HTMLCanvasElement.prototype, 'getContext')
      .mockReturnValue(mockCtx as unknown as CanvasRenderingContext2D);

    jest.spyOn(window, 'requestAnimationFrame').mockReturnValue(1);
    jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});

    Object.defineProperty(window, 'innerWidth', { value: 200, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', {
      value: 200,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('does nothing when canvas ref is null', () => {
    renderHook(() => useParticles({ current: null }, defaultConfig));
    expect(HTMLCanvasElement.prototype.getContext).not.toHaveBeenCalled();
  });

  it('does nothing when getContext returns null', () => {
    jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, defaultConfig));
    expect(mockCtx.clearRect).not.toHaveBeenCalled();
  });

  it('sets canvas dimensions to window size on mount', () => {
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, defaultConfig));
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(200);
  });

  it('starts the animation loop via requestAnimationFrame', () => {
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, defaultConfig));
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it('registers a resize event listener on window', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, defaultConfig));
    expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    addSpy.mockRestore();
  });

  it('cancels the animation frame on unmount', () => {
    const canvas = document.createElement('canvas');
    const { unmount } = renderHook(() => useParticles({ current: canvas }, defaultConfig));
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
  });

  it('removes the resize listener on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const canvas = document.createElement('canvas');
    const { unmount } = renderHook(() => useParticles({ current: canvas }, defaultConfig));
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    removeSpy.mockRestore();
  });

  it('updates canvas dimensions on window resize', () => {
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, defaultConfig));
    Object.defineProperty(window, 'innerWidth', { value: 400, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', {
      value: 300,
      writable: true,
      configurable: true,
    });
    window.dispatchEvent(new Event('resize'));
    expect(canvas.width).toBe(400);
    expect(canvas.height).toBe(300);
  });

  it('draws particles with dark theme', () => {
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, { ...defaultConfig, theme: 'dark' }));
    expect(mockCtx.beginPath).toHaveBeenCalled();
    expect(mockCtx.fill).toHaveBeenCalled();
  });

  it('draws particles with light theme', () => {
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, { ...defaultConfig, theme: 'light' }));
    expect(mockCtx.beginPath).toHaveBeenCalled();
    expect(mockCtx.fill).toHaveBeenCalled();
  });

  it('draws connection lines when particles are within connDist', () => {
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, { ...defaultConfig, connDist: 10000 }));
    expect(mockCtx.stroke).toHaveBeenCalled();
  });

  it('does not draw connection lines when connDist is 0', () => {
    const canvas = document.createElement('canvas');
    renderHook(() => useParticles({ current: canvas }, { ...defaultConfig, connDist: 0 }));
    expect(mockCtx.stroke).not.toHaveBeenCalled();
  });
});
