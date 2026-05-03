import { jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
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

  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders a header element', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  it('renders a main element', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('renders a footer element', () => {
    const { container } = render(<App />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders the theme toggle button', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button')).toBeInTheDocument();
  });
});
