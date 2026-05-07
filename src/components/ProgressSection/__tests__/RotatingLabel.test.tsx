import { jest } from '@jest/globals';
import { act, render } from '@testing-library/react';
import { RotatingLabel } from '../RotatingLabel';

const MESSAGES = [
  'something is being built',
  'something is being crafted',
  'something is being created',
  'currently in the lab',
  'crafting something special',
];

const getLabel = (container: HTMLElement) =>
  container.querySelector('.progress-label') as HTMLElement;

describe('RotatingLabel', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders the first message on mount', () => {
    const { container } = render(<RotatingLabel messages={MESSAGES} />);
    expect(getLabel(container).textContent).toBe(MESSAGES[0]);
  });

  it('iterates messages sequentially', () => {
    const { container } = render(<RotatingLabel messages={MESSAGES} />);

    for (let i = 0; i < MESSAGES.length; i++) {
      expect(getLabel(container).textContent).toBe(MESSAGES[i]);
      // advance past the interval + fade delay
      act(() => {
        jest.advanceTimersByTime(5300);
      });
    }
    // wraps back to first
    expect(getLabel(container).textContent).toBe(MESSAGES[0]);
  });

  it('applies fading class during transition', () => {
    const { container } = render(<RotatingLabel messages={MESSAGES} />);
    const label = getLabel(container);

    expect(label.classList.contains('fading')).toBe(false);

    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(label.classList.contains('fading')).toBe(true);

    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(label.classList.contains('fading')).toBe(false);
  });

  it('cleans up the interval on unmount', () => {
    const clearIntervalSpy = jest.spyOn(globalThis, 'clearInterval');
    const { unmount } = render(<RotatingLabel messages={MESSAGES} />);
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
