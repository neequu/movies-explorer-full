import AboutBlock from '@/components/about-block/AboutBlock';
import Diagram from '@/components/diagram/Diagram';

function About() {
  return (
    <section className='about' id='about'>
      <h2 className='about__heading'>О проекте</h2>
      <div className='about__content'>
        <AboutBlock
          heading='Дипломный проект включал 5 этапов'
          text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
        />
        <AboutBlock
          heading='На выполнение диплома ушло 5 недель'
          text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
        />
      </div>
      <Diagram />
    </section>
  );
}

export default About;
