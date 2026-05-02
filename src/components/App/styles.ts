import { css } from 'styled-system/css'

export const pageCss = css({
  position: 'relative',
  zIndex: '1',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const mainCss = css({
  flex: '1',
  paddingTop: { base: '32px' },
  paddingBottom: { base: '32px', sm: '64px' },
  paddingLeft: { base: '24px', sm: '64px' },
  paddingRight: { base: '24px', sm: '64px' },
  display: 'flex',
  flexDirection: 'column',
  gap: { base: '48px', sm: '64px' },
})
