import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logo from './logo.svg';
import Button from '../Button/index';
import Input from '../Input/index';

function Header({ query, onInputChange }) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <h1 className="title">Stellaratunes</h1>
      <Input
        type="text"
        value={query}
      />
      <Button type="primary" onButtonClick={onInputChange}>Search</Button>
    </div>
  );
}

Header.propTypes = {
  query: PropTypes.string,
  onInputChange: PropTypes.func
};

export default Header;
