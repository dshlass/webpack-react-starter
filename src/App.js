import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from './theme/fonts';

const App = ({ title }) => {
  return (
    <>
      <GlobalStyle />
      <div>{title}</div>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
