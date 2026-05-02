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
  paddingTop: { base: '40px', sm: '60px' },
  paddingBottom: { base: '60px', sm: '80px' },
  paddingLeft: { base: '28px', sm: '60px' },
  paddingRight: { base: '28px', sm: '60px' },
  display: 'flex',
  flexDirection: 'column',
  gap: { base: '56px', sm: '80px' },
})
