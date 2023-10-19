import logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';

function AuthPage({ children, heading }) {
  return (
    <section className='auth'>
      <div className='auth__container'>
        <Link to='/' className='auth__link'>
          <img
            className='auth__logo'
            src={logo}
            loading='lazy'
            alt='moovees логотип'
          />
        </Link>
        <h1 className='auth__heading'>{heading}</h1>
        {children}
      </div>
    </section>
  );
}

export default AuthPage;
