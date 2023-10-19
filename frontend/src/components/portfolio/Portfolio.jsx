import { projects } from '@/utils/constants.js';

function Portfolio() {
  const projectList = projects.map((p) => (
    <li key={p.name} className='portfolio__list-item'>
      <a
        href={p.link}
        className='portfolio__link'
        target='_blank'
        rel='noreferrer'>
        {p.name}
        <span className='portfolio__link-arrow'></span>
      </a>
    </li>
  ));
  return (
    <article className='portfolio'>
      <p className='portfolio__heading'>Портфолио</p>
      <ul className='portfolio__list'>{projectList}</ul>
    </article>
  );
}

export default Portfolio;
