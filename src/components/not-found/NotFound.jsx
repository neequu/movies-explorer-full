import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <section className='not-found'>
      <div className='not-found__info'>
        <p className='not-found__paragraph'>404</p>
        <h1 className='not-found__heading'>Страница не найдена</h1>
      </div>
      <span className='not-found__link' onClick={() => navigate(-1)}>
        Назад
      </span>
    </section>
  );
}

export default NotFound;
