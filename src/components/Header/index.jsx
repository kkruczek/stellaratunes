import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logo from './logo.svg';
import Button from '../Button/index';
import Input from '../Input/index';

function Header({
  query, onInputChange, onButtonClicked, loading
}) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <h1 className="title">Stellaratunes</h1>
      <Input
        type="text"
        name="query"
        value={query}
        onInputChange={onInputChange}
      />
      <Button type="primary" loading={loading} onButtonClick={onButtonClicked}>Search</Button>
    </div>
  );
}

Header.propTypes = {
  query: PropTypes.string,
  onInputChange: PropTypes.func,
  onButtonClicked: PropTypes.func,
  loading: PropTypes.bool
};

export default Header;
