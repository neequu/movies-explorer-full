import FilterToggle from '@/components/filter-toggle/FilterToggle.jsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocalStorageValues } from '@/utils/utils.js';
import { useValidate } from '@/hooks/validate.js';

function SearchForm({
  setParams,
  loading,
  getMovies,
  movies,
  setNoQueryError,
  setMovies
}) {
  const { pathname } = useLocation();
  const { defaultFilterValue, defaultInputValue } = getLocalStorageValues();
  const filterValue = pathname === '/movies' ? defaultFilterValue : false;
  const inputValue = pathname === '/movies' ? defaultInputValue : '';
  const { values, handleChange } = useValidate();
  const [filtered, setFiltered] = useState(filterValue);
  function reqFilter() {
    setParams({ query: values.query, filtered });
  }

  useEffect(() => {
    reqFilter();
    setNoQueryError(false);
  }, [filtered]);

  useEffect(() => {
    if (pathname === '/movies') {
      setParams({ query: defaultInputValue, filtered: defaultFilterValue });
      if (!localStorage.getItem('searched-movies')) {
        getMovies();
      } else {
        setMovies(JSON.parse(localStorage.getItem('searched-movies')))
      }
    } else {
      reqFilter();
    }
    values.query = inputValue;
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.query) {
      setNoQueryError(true);
      return;
    }
    if (pathname === '/movies' && !movies) {
      getMovies();
    }
    reqFilter();
    setNoQueryError(false);
  }

  function handleFilter(e) {
    if (pathname === '/movies') {
      localStorage.setItem('filteredStored', e.target.checked ?? false);
    }
    setFiltered(e.target.checked);
  }
  function handleInput(e) {
    if (pathname === '/movies') {
      localStorage.setItem('queryStored', e.target.value || '');
    }
    handleChange(e);
  }
  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit} noValidate>
        <fieldset className='search-form__fieldset'>
          <input
            onChange={handleInput}
            value={values.name}
            defaultValue={pathname === '/movies' ? defaultInputValue : ''}
            type='text'
            placeholder='Фильм'
            className='search-form__input'
            required
            name='query'
            disabled={loading}
          />
          <button type='submit' className='search-form__button'>
            Поиск
          </button>
        </fieldset>
        <FilterToggle
          handleFilter={handleFilter}
          pathname={pathname}
          setFiltered={setFiltered}
          loading={loading}>
          <span className='filter-toggle__text'>Короткометражки</span>
        </FilterToggle>
      </form>
    </section>
  );
}

export default SearchForm;
