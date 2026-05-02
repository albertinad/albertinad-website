import { sectionCss, wrapCss, dotsCss, dotCss, ringCss, labelCss } from './styles'

export const ProgressSection = () => {
  return (
    <div className={sectionCss}>
      <div className={wrapCss}>
        <div className={dotsCss}>
          <div className={dotCss} />
          <div className={dotCss} />
          <div className={dotCss} />
          <div className={ringCss} />
        </div>
        <span className={labelCss}>something is being built</span>
      </div>
    </div>
  )
}
