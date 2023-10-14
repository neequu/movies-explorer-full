import { tech } from '@/utils/constants';

function Tech() {
  const techList = tech.map((t) => (
    <li className='tech__block' key={t}>
      {t}
    </li>
  ));

  return (
    <section className='tech'>
      <h2 className='tech__heading'>Технологии</h2>
      <div className='tech__content'>
        <h3 className='tech__subheading'>7 технологий</h3>
        <p className='tech__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className='tech__blocks'>{techList}</ul>
    </section>
  );
}

export default Tech;
