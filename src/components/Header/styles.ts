import { css } from 'styled-system/css';

export const headerCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: { base: '24px', sm: '36px' },
  paddingBottom: { base: '24px', sm: '36px' },
  paddingLeft: { base: '24px', sm: '64px' },
  paddingRight: { base: '24px', sm: '64px' },
  opacity: '0',
  animation: 'fadeDown 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s forwards',
});

export const headerLeftCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
});

export const navCss = css({
  display: 'flex',
  gap: '24px',
});

export const socialLinkCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  fontSize: '0.76rem',
  fontWeight: '400',
  letterSpacing: '0.10em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  textDecoration: 'none',
  position: 'relative',
  transition: 'color 0.22s ease',
  '& svg': {
    width: '13px',
    height: '13px',
    fill: 'currentColor',
    flexShrink: '0',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '-2px',
    width: '0',
    height: '1px',
    background: 'var(--accent)',
    transition: 'width 0.28s cubic-bezier(0.22,1,0.36,1)',
  },
  '&:hover': {
    color: 'var(--fg)',
  },
  '&:hover::after': {
    width: '100%',
  },
});

export const toggleCss = css({
  appearance: 'none',
  border: '1px solid var(--border)',
  borderRadius: '20px',
  background: 'var(--card-bg)',
  width: '36px',
  height: '20px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'background 0.25s, border-color 0.25s',
  flexShrink: '0',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '3px',
    left: '3px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'var(--muted)',
    transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1), background 0.25s',
  },
  '&.dark-on::after': {
    transform: 'translateX(16px)',
    background: 'var(--accent)',
  },
});
