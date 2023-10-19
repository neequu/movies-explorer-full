function TheFooter() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__header'>
          <p className='footer__caption'>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
        </div>
        <div className='footer__footer'>
          <ul className='footer__links'>
            <li className='footer__links-item'>
              <a
                target='_blank'
                href='https://practicum.yandex.ru/profile/web/'
                className='footer__link'
                rel='noreferrer'>
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://github.com/niccc0'
                className='footer__link'
                rel='noreferrer'>
                Github
              </a>
            </li>
          </ul>
          <p className='footer__copyright'>&copy; 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
