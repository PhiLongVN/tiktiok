import React from 'react';
import styles from '-/component/Header/Header.module.scss';
import logo from '-/assets/logo/logo.svg';
import classNames from 'classnames/bind';

function Header() {
  var cx = classNames.bind(styles);

  return (
    <div className={cx('header')}>
      <div>dd</div>
      <div>gg</div>
      <div>aa</div>
      <img src={logo} alt="" />
    </div>
  );
}

export default Header;
