import { useEffect, useState } from 'react';

const INTERVAL_MS = 5000;
const FADE_MS = 300;

type Props = {
  messages: string[];
};

export const RotatingLabel = ({ messages }: Props) => {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setFading(false);
      }, FADE_MS);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [messages.length]);

  return (
    <span className={`progress-label${fading ? ' fading' : ''}`}>
      {messages[index]}
    </span>
  );
};
