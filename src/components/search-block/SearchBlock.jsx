import SearchInput from '@/components/search-form/SearchForm.jsx';
import FilterToggle from '@/components/filter-toggle/FilterToggle.jsx';

function SearchBlock() {
  return (
    <div className='search-block'>
      <SearchInput />
      <FilterToggle>
        <span className='filter-toggle__text'>Короткометражки</span>
      </FilterToggle>
    </div>
  );
}

export default SearchBlock;
