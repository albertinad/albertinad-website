import { css } from 'styled-system/css'

export const sectionCss = css({
  opacity: '0',
  animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.7s forwards',
})

export const wrapCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
})

export const dotsCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
})

export const dotCss = css({
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  background: 'var(--accent)',
  opacity: '0',
  animation: 'dotBreathe 2.8s ease-in-out infinite',
  '&:nth-child(1)': { animationDelay: '0s' },
  '&:nth-child(2)': { animationDelay: '0.35s' },
  '&:nth-child(3)': { animationDelay: '0.7s' },
})

export const ringCss = css({
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  border: '1.5px solid var(--accent)',
  opacity: '0',
  animation: 'dotBreathe 2.8s ease-in-out infinite',
  animationDelay: '1.05s',
})

export const labelCss = css({
  fontSize: '0.72rem',
  fontWeight: '400',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  whiteSpace: 'nowrap',
})
