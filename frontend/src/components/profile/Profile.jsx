import { CurrentUserContext } from '@/contexts/CurrentUserContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { getToken } from '@/utils/utils.js';
import { editCurrentUserInfo } from '@/utils/mainApi.js';
import { useValidate, useDisable } from '@/hooks/validate.js';

function Profile({ signOut, setLoading, loading }) {
  const [isEditing, setEditing] = useState(false);
  const [updateError, setUpdateError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { name: defaultName, email: defaultEmail } =
    useContext(CurrentUserContext);

  const { values, error, handleChange, setValues } = useValidate();
  const { disabled, validateInputs, setDisabled } = useDisable();
  const fields = useRef(null);

  async function handleUpdateUserInfo() {
    const jwt = getToken();
    setUpdateError(false);
    setLoading(true);
    try {
      const { name = defaultName, email = defaultEmail } = values;
      await editCurrentUserInfo(jwt, { name, email });
      setEditing(false);
      setUpdateSuccess(true);
    } catch (e) {
      // console.log(e);
      setUpdateError(true);
      setUpdateSuccess(false);
      setDisabled(true);
    } finally {
      setDisabled(true);
      setLoading(false);
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 2000);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUserInfo();
  }

  useEffect(() => {
    setValues({ name: defaultName, email: defaultEmail });
  }, []);

  useEffect(() => {
    validateInputs(error, fields.current.elements);
    if (
      JSON.stringify(values) ===
      JSON.stringify({ name: defaultName, email: defaultEmail })
    ) {
      setDisabled(true);
    }
  }, [error, values]);

  function cancelEditing() {
    setEditing(false);
    setValues({ name: defaultName, email: defaultEmail });
  }

  return (
    <section className='profile'>
      <form className='profile__container' onSubmit={handleSubmit}>
        <div>
          <h1 className='profile__heading'>
            Привет, {(!isEditing && values.name) || defaultName}!
          </h1>
          <fieldset className='profile__content' ref={fields}>
            <div className='profile__item'>
              <label className='profile__label'>Имя</label>
              <input
                onChange={handleChange}
                value={values.name ?? defaultName ?? ''}
                type='text'
                className='profile__input'
                disabled={!isEditing || loading}
                placeholder='Имя'
                minLength={2}
                name='name'
                required
              />
            </div>
            <div className='profile__item'>
              <label className='profile__label'>E-mail</label>
              <input
                onChange={handleChange}
                value={values.email ?? defaultEmail ?? ''}
                type='email'
                className='profile__input'
                disabled={!isEditing || loading}
                placeholder='E-mail'
                name='email'
                required
              />
            </div>
          </fieldset>
        </div>
        <div className='profile__footer'>
          {updateSuccess && (
            <span className='profile__message'>Данные успешно обновлены.</span>
          )}
          {updateError && (
            <span className='profile__message_error'>
              При попытке редактировать профиль произошла ошибка.
            </span>
          )}
          {isEditing ? (
            <>
              <button
                type='submit'
                className={`${
                  disabled ? 'profile__button_disabled' : 'profile__button_save'
                }`}
                disabled={disabled || loading}>
                Сохранить
              </button>

              <button
                type='button'
                className='profile__button profile__button_red'
                onClick={cancelEditing}>
                Отмена
              </button>
            </>
          ) : (
            <>
              <button
                type='button'
                className='profile__button profile__button_red'
                onClick={signOut}>
                Выйти из аккаунта
              </button>
              <button
                type='button'
                className='profile__button'
                onClick={() => setEditing(true)}>
                Редактировать
              </button>
            </>
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;
