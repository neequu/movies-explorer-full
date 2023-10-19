import heroImage from '@/assets/hero.svg';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__content-container'>
        <h1 className='hero__heading'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='hero__text'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href='#about' className='hero__link'>
          Узнать больше
        </a>
      </div>
      <img
        className='hero__image'
        loading='lazy'
        src={heroImage}
        alt='планета'
      />
    </section>
  );
}

export default Hero;
