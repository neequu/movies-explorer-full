import studentPhoto from '@/assets/student.png';
import { githubUrl } from '../../utils/constants';
function Student() {
  return (
    <section className='student'>
      <h2 className='student__heading'>Студент</h2>
      <div className='student__content'>
        <img
          className='student__photo'
          src={studentPhoto}
          loading='lazy'
          alt='студент яндекса никита'
        />
        <div className='student__text-content'>
          <div>
            <h2 className='student__subheading'>Никита</h2>
            <p className='student__text student__text_lg'>
              Фронтенд-разработчик, 20 лет
            </p>
            <p className='student__text'>
              Окончил обучение в ИСПО СПбПУ, где развил сильные технические
              навыки в ремонте компьютеров, работе в сети, управлении базами
              данных и программировании.
            </p>
            <p className='student__text'>
              После выпуска из учебного заведения самостоятельно погрузился в
              изучение интерфейсных и серверных веб-технологий, уделяя особое
              внимание JavaScript и Vue.js. Увлечен созданием адаптивных,
              динамичных веб-приложений, а также изучением новейших
              веб-фреймворков и методологий разработки.
            </p>
          </div>
          <a
            rel='noreferrer'
            target='_blank'
            href={githubUrl}
            className='student__link'>
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Student;
