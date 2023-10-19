import { useState } from 'react';
import { EMAIL_REGEX } from '@/utils/constants';

export function useValidate() {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const t = e.target;

    setError({ ...error, [t.name]: t.validationMessage });
    setValues({ ...values, [t.name]: t.value });
    if (t.name === 'email') {
      const isValidEmail = EMAIL_REGEX.test(t.value);
      return !isValidEmail
        ? setError({ ...error, [t.name]: 'Необходимо ввести корректный email' })
        : '';
    }
  };

  const resetForm = () => {
    setError({});
    setValues({});
  };

  return { values, error, resetForm, handleChange, setValues };
}

export function useDisable() {
  const [disabled, setDisabled] = useState(true);

  const validateInputs = (error, formInputs) => {
    if (!error || !Object.entries(error).length) return;
    const allValid = [...formInputs].every((input) => {
      const isValid = input.validity.valid;
      if (input.name === 'email') {
        return EMAIL_REGEX.test(input.value) && isValid;
      }
      return isValid;
    });

    setDisabled(!allValid);
  };

  return { disabled, validateInputs, setDisabled };
}
