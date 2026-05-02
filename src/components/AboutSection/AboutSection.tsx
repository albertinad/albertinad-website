import { SectionHeader } from '../SectionHeader'
import { sectionCss, bodyCss, textCss } from './styles'

export const AboutSection = () => {
  return (
    <section className={sectionCss}>
      <SectionHeader title="About Me" />
      <div className={bodyCss}>
        <p className={textCss}>
          My name is Albertina Durante, a Senior Staff Software Engineer with an MSc-equivalent in
          Information Systems Engineering. Over the past decade, I've worked across backend,
          frontend, and full-stack roles, from big tech companies to startups, including time as a
          founding engineer, delivering solutions in taxes, e-commerce, fitness, developer tools,
          and consumer applications.
          <br />
          <br />
          My passion is designing and building reliable, scalable, and performant systems that
          contribute to delivering real value to users. I also love mentoring engineers and helping
          them grow into the next stage of their careers.
        </p>
      </div>
    </section>
  )
}
