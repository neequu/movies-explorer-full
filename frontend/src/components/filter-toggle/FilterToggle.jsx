import { useEffect } from 'react';

function FilterToggle({
  children,
  handleFilter,
  pathname,
  setFiltered,
  loading,
}) {
  const checked =
    pathname === '/movies'
      ? JSON.parse(localStorage.getItem('filteredStored'))
      : false;
  useEffect(() => {
    setFiltered(checked);
  }, []);

  return (
    <div className='filter-toggle'>
      <input
        id='filter-toggle-checkbox'
        type='checkbox'
        className='filter-toggle__checkbox'
        name='filter'
        onChange={handleFilter}
        defaultChecked={checked}
        disabled={loading}
      />
      <label
        tabIndex='0'
        htmlFor='filter-toggle-checkbox'
        className='filter-toggle__label'>
        <span className='filter-toggle__ball'></span>
      </label>
      {children}
    </div>
  );
}

export default FilterToggle;
