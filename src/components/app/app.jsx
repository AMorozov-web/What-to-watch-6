import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = ({titles}) => {

  return (
    <MainPage
      titles={titles}
    />
  );
};

App.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;
