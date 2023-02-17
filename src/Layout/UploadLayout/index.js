import Header from '-/component/Header';
import SideBar from '-/component/SideBar';
import React from 'react';
import styles from '-/Layout/UploadLayout/UploadLayout.module.scss';
import classNames from 'classnames/bind';
function UploadLayout({ children }) {
  var cx = classNames.bind(styles);
  return (
    <div>
      <Header />

      <div className={cx('container')}>
        <SideBar />
        <p>Loremolor, earum? Deserunt, eum.</p>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default UploadLayout;
