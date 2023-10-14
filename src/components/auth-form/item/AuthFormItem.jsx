function AuthFormItem({ onChange, errorMsg, value, label, ...inputProps }) {
  const handleChange = (e) => onChange(e);

  return (
    <div className='auth-form__item'>
      <label className='auth-form__label' onChange={handleChange} value={value}>
        {label}
      </label>
      <input className='auth-form__input' {...inputProps} />
      <span className='auth-form__error'>1{errorMsg}</span>
    </div>
  );
}

export default AuthFormItem;
