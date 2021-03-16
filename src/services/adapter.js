const adaptToClient = (film) => {
  const adaptedFilm = {
    ...film,
    title: film.name,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    scoresCount: film.scores_count,
    runTime: film.run_time,
    isFavorite: film.is_favorite,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
  };

  delete adaptedFilm.name;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;

  return adaptedFilm;
};

const adaptToServer = (film) => {
  const adaptedFilm = {
    ...film,
    [`name`]: film.title,
    [`poster_image`]: film.posterImage,
    [`preview_image`]: film.previewImage,
    [`background_image`]: film.backgroundImage,
    [`background_color`]: film.backgroundColor,
    [`scores_count`]: film.scoresCount,
    [`run_time`]: film.runTime,
    [`is_favorite`]: film.isFavorite,
    [`video_link`]: film.videoLink,
    [`preview_video_link`]: film.previewVideoLink,
  };

  delete adaptedFilm.title;
  delete adaptedFilm.posterImage;
  delete adaptedFilm.previewImage;
  delete adaptedFilm.backgroundImage;
  delete adaptedFilm.backgroundColor;
  delete adaptedFilm.scoresCount;
  delete adaptedFilm.runTime;
  delete adaptedFilm.isFavorite;
  delete adaptedFilm.videoLink;
  delete adaptedFilm.previewVideoLink;

  return adaptedFilm;
};

export {
  adaptToClient,
  adaptToServer
};
