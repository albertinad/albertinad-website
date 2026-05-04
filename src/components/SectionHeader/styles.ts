import { css } from 'styled-system/css';

export const headerCss = css({
  display: 'flex',
  alignItems: 'baseline',
  gap: '16px',
  marginBottom: '24px',
});

export const titleCss = css({
  fontSize: '0.72rem',
  fontWeight: '500',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  whiteSpace: 'nowrap',
  margin: 0,
});
