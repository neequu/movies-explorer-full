function AuthFormItem({ onChange, errorMsg, value, label, ...inputProps }) {
  return (
    <div className='auth-form__item'>
      <label className='auth-form__label'>{label}</label>
      <input
        className={`auth-form__input ${
          errorMsg?.length ? 'auth-form__input_error' : ''
        }`}
        {...inputProps}
        onChange={onChange}
        value={value}
      />
      <span
        className={`auth-form__error ${
          errorMsg?.length ? 'auth-form__error_visible' : ''
        }`}>
        {errorMsg}
      </span>
    </div>
  );
}

export default AuthFormItem;
