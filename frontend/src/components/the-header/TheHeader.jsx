import logo from '@/assets/logo.svg';
import { Link, useLocation } from 'react-router-dom/dist';
import TheNavbar from '@/components/the-navbar/TheNavbar';

function TheHeader({ changeActive, isLoggedIn }) {
  const { pathname } = useLocation();
  return (
    <header className={`header ${pathname === '/' ? 'header_accent' : ''}`}>
      <div className='header__container'>
        <Link className='header__link header__link_bright' to='/'>
          <img
            className='header__logo'
            src={logo}
            loading='lazy'
            alt='moovees логотип'
          />
        </Link>

        {isLoggedIn ? (
          <>
            <button
              type='button'
              onClick={changeActive}
              className='header__mobile-nav-toggle'
              aria-controls='mobile-nav'>
              <span className='sr-only'>Menu</span>
            </button>
            <TheNavbar />
          </>
        ) : (
          <>
            <div className='header__link-container'>
              <Link className='header__link' to='/signup'>
                Регистрация
              </Link>
              <Link className='header__link header__link_green' to='/signin'>
                Войти
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default TheHeader;
