import { NavLink } from 'react-router-dom';

function TheNavbar() {
  const activeClass = ({ isActive }) =>
    `nav__link ${isActive ? 'nav__link_type_active' : ''}`;

  return (
    <nav className='nav'>
      <NavLink className={activeClass} to='/movies'>
        Фильмы
      </NavLink>

      <NavLink className={activeClass} to='/saved-movies'>
        Сохранённые фильмы
      </NavLink>
      <NavLink className={activeClass} to='/profile'>
        <span className='nav__link-account'>
          Аккаунт
          <span className='nav__icon'></span>
        </span>
      </NavLink>
    </nav>
  );
}

export default TheNavbar;
