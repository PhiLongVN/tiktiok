import Header from '-/component/Header';
import SideBar from '-/component/SideBar';
import React from 'react';
import styles from '-/Layout/DefaultLayout/DefaultLayout.module.scss';
import classNames from 'classnames/bind';
function DefaultLayout({ children }, props) {
  var cx = classNames.bind(styles);

  return (
    <div>
      <Header handleTheme={props.handleTheme} />

      <div className={cx('container')}>
        <SideBar />
        aaaa
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
