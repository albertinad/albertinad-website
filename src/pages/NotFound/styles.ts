import { css } from 'styled-system/css';

export const sectionCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  animation: 'fadeUp 0.9s ease both',
  animationDelay: '0.4s',
});

export const codeCss = css({
  fontSize: 'clamp(3rem, 10vw, 6rem)',
  fontWeight: '200',
  color: 'var(--fg)',
  letterSpacing: '-0.02em',
  lineHeight: '1',
});

export const messageCss = css({
  fontSize: { base: '0.9rem', sm: '1rem' },
  fontWeight: '300',
  color: 'var(--muted)',
  lineHeight: '1.6',
});

export const linkCss = css({
  fontSize: '0.8rem',
  fontWeight: '400',
  color: 'var(--accent)',
  textUnderlineOffset: '3px',
  textDecoration: 'underline',
  width: 'fit-content',
  _hover: {
    opacity: '0.8',
  },
});
