import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/dist';

function MobileNav({ active, changeActive }) {
  const activeClass = ({ isActive }) =>
    `mobile-nav__link ${isActive ? 'mobile-nav__link_active' : ''}`;

  const routes = [
    { to: '/', text: 'Главная' },
    { to: '/movies', text: 'Фильмы' },
    { to: '/saved-movies', text: 'Сохраненные фильмы' },
  ];

  return (
    <div
      id='mobile-nav'
      className={`mobile-nav ${active ? 'mobile-nav_active' : ''}`}>
      <button
        type='button'
        className='mobile-nav__close-button'
        onClick={changeActive}></button>
      <nav className='mobile-nav__container'>
        {routes.map((r) => (
          <NavLink
            key={r.to}
            className={activeClass}
            to={r.to}
            onClick={changeActive}>
            {r.text}
          </NavLink>
        ))}
      </nav>
      <Link
        className='mobile-nav__link-account'
        to='/profile'
        onClick={changeActive}>
        Аккаунт
        <span className='mobile-nav__icon'></span>
      </Link>
    </div>
  );
}

export default MobileNav;
