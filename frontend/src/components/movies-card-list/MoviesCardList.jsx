import Preloader from '@/components/preloader/Preloader';
import ShowMore from '@/components/show-more/ShowMore';
import { cloneElement, useEffect, useState } from 'react';
import {
  MOVIES_LIMIT_LG,
  MOVIES_LIMIT_MD,
  MOVIES_LIMIT_SM,
  MOVIES_LIMIT_STEP_LG,
  MOVIES_LIMIT_STEP_MD,
  MOVIES_LIMIT_STEP_SM,
  SCREEN_WIDTH_LG,
  SCREEN_WIDTH_MD,
  SCREEN_WIDTH_SM,
} from '@/utils/constants';
import filterMovies from '@/utils/movies';

function MoviesCardList({
  moviesData,
  errorFetching,
  params,
  loading,
  children,
  noQueryError,
}) {
  const { filteredMovies } = filterMovies(
    moviesData,
    params.filtered,
    params.query
  );
  const [noResults, setNoResults] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(null);
  const [limitAddStep, setLimitAddStep] = useState(null);
  const [visibleMovies, setVisibleMovies] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  async function handleResize() {
    setWindowWidth(window.innerWidth);

    if (windowWidth < SCREEN_WIDTH_MD) {
      setLimitAddStep(MOVIES_LIMIT_STEP_SM);
      setVisibleLimit(MOVIES_LIMIT_SM);
    } else if (windowWidth > SCREEN_WIDTH_SM && windowWidth < SCREEN_WIDTH_LG) {
      setLimitAddStep(MOVIES_LIMIT_STEP_MD);
      setVisibleLimit(MOVIES_LIMIT_MD);
    } else {
      setLimitAddStep(MOVIES_LIMIT_STEP_LG);
      setVisibleLimit(MOVIES_LIMIT_LG);
    }

    await new Promise((r) => setTimeout(r, 1000));
  }

  useEffect(() => {
    handleResize();
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (!filteredMovies) return;
    setVisibleMovies(filteredMovies.slice(0, visibleLimit));
    setNoResults(filteredMovies.length === 0);
  }, [moviesData, params]);

  const totalMovies = filteredMovies?.length;
  const noMoreItems = totalMovies === visibleMovies?.length;

  function showMore() {
    if (!filteredMovies) return;
    setVisibleMovies((prevMovies) => {
      const start = prevMovies.length;
      const end =
        start + limitAddStep > totalMovies ? totalMovies : start + limitAddStep;
      return [...prevMovies, ...filteredMovies.slice(start, end)];
    });
  }
  return (
    <section className='movies-card-list'>
      {noQueryError && (
        <p className='movies-card-list__message'>Нужно ввести ключевое слово</p>
      )}
      {!loading ? (
        <>
          {!noResults && (
            <ul className='movies-card-list__grid'>
              {cloneElement(children, {
                moviesData: visibleMovies,
              })}
            </ul>
          )}
          <div className='movies-card-list__footer'>
            {errorFetching && (
              <span className='movies-card-list__message'>
                Во время запроса произошла ошибка. Возможно, проблема с
                соединением или сервер недоступен. Подождите немного и
                попробуйте ещё раз
              </span>
            )}

            {params?.query && noResults && (
              <span className='movies-card-list__message'>
                По Вашему запросу ничего не найдено.
              </span>
            )}
            {!noMoreItems && !noResults && !errorFetching && moviesData && (
              <ShowMore showMore={showMore} />
            )}
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </section>
  );
}

export default MoviesCardList;
