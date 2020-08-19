import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from './theme/fonts';
import Logo from './assets/images/logo.svg';

const App = ({ title }) => {
  return (
    <>
      <GlobalStyle />
      <div>{title}</div>
      <Logo width={250} height={250} />
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
