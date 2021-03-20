import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilms} from '../../store/api-actions';
import {selectData} from '../../store/reducers/data/selectors';
import {MoviesList} from '../movies-list/movies-list';
import {Logo} from '../logo/logo';
import {LoadingScreen} from '../loading-screen/loading-screen';
import {GenreList} from '../genre-list/genre-list';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {Promo} from '../promo/promo';

const MainPage = () => {
  const {isFilmsLoaded} = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms());
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo onMainPage={true}/>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <Promo />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <MoviesList />
          <ShowMoreButton />
        </section>
        <footer className="page-footer">
          <Logo onMainPage={true} centered={true}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MainPage.propTypes = {};

export {MainPage};
