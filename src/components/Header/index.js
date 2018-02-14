import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import logo from './logo.svg';
import Button from '../Button/index';
import Input from '../Input/index';

function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <h1 className="title">Stellaratunes</h1>
      <Input
        type="text"
        name="query"
        value={props.query}
        onInputChange={props.onInputChange}
      />
      <Button type="primary" onButtonClick={props.onButtonClick}>Search</Button>
    </div>
  );
}

Header.propTypes = {
  query: PropTypes.string,
  onInputChange: PropTypes.func,
  onButtonClick: PropTypes.func
};

export default Header;
