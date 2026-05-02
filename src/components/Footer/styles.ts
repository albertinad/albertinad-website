import { css } from 'styled-system/css';

export const footerCss = css({
  paddingTop: { base: '24px', sm: '28px' },
  paddingBottom: { base: '24px', sm: '28px' },
  paddingLeft: { base: '24px', sm: '64px' },
  paddingRight: { base: '24px', sm: '64px' },
  borderTop: '1px solid var(--border)',
  opacity: '0',
  animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.9s forwards',
});

export const innerCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const copyCss = css({
  fontSize: '0.74rem',
  fontWeight: '300',
  letterSpacing: '0.05em',
  color: 'var(--muted)',
});
