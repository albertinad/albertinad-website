import { css } from 'styled-system/css';

export const heroCss = css({
  opacity: '0',
  animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s forwards',
});

export const nameCss = css({
  fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
  fontWeight: '300',
  letterSpacing: '-0.02em',
  lineHeight: '1.1',
  color: 'var(--fg)',
  '& strong': {
    fontWeight: '400',
  },
});
