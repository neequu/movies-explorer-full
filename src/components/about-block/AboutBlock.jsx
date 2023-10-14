function AboutBlock({ heading, text }) {
  return (
    <div className='about-block'>
      <h3 className='about-block__heading'>{heading}</h3>
      <p className='about-block__text'>{text}</p>
    </div>
  );
}

export default AboutBlock;
