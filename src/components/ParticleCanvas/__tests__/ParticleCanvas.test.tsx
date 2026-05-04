import { jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { ParticleCanvas } from '../ParticleCanvas';

describe('ParticleCanvas', () => {
  beforeEach(() => {
    const mockCtx = {
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
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders a canvas element', () => {
    const { container } = render(
      <ParticleCanvas
        accentColor="#22c55e"
        density={70}
        speed={0.35}
        connDist={130}
        theme="light"
      />,
    );
    expect(container.querySelector('canvas')).toBeInTheDocument();
    expect(container.querySelector('#particle-canvas')).toBeInTheDocument();
  });

  it('renders canvas with aria-hidden', () => {
    const { container } = render(
      <ParticleCanvas
        accentColor="#22c55e"
        density={70}
        speed={0.35}
        connDist={130}
        theme="light"
      />,
    );
    expect(container.querySelector('canvas')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders a single canvas element', () => {
    const { container } = render(
      <ParticleCanvas
        accentColor="#22c55e"
        density={70}
        speed={0.35}
        connDist={130}
        theme="dark"
      />,
    );
    expect(container.querySelectorAll('canvas')).toHaveLength(1);
  });
});
