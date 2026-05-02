import { css } from 'styled-system/css'

export const sectionCss = css({
  opacity: '0',
  animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.55s forwards',
})

export const bodyCss = css({
  maxWidth: '680px',
})

export const textCss = css({
  fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
  fontWeight: '300',
  lineHeight: '1.8',
  color: 'var(--fg)',
})
