import React from 'react';
import styles from '-/Layout/-MainComponents/Header/Header.module.scss';
import classNames from 'classnames/bind';
import logo from '-/assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import LoginBar from '-/component/LoginBar';
import SearchBar from '-/component/SearchBar';

let cx = classNames.bind(styles);

function Header({ isUser = true }) {
  return (
    <div className={cx('header')}>
      <div className={cx('inner-header')}>
        {/* logo */}
        <span>
          <Link src={logo} alt="tik-tok-logo" />
        </span>

        {/* search */}
        <SearchBar />

        {/* log in */}
        <LoginBar isUser={true} />
      </div>
    </div>
  );
}

export default Header;
