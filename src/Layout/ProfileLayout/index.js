import Header from '-/component/Header';
import SideBar from '-/component/SideBar';
import React from 'react';
import styles from '-/Layout/ProfileLayout/ProfileLayout.module.scss';
import classNames from 'classnames/bind';

function ProfileLayout({ children }) {
  var cx = classNames.bind(styles);

  return (
    <div>
      <Header />

      <div className={cx('container')}>
        <SideBar />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        minima, enim magnam velit natus facilis dolores perferendis ea doloribus
        optio ducimus accusantium reiciendis in vel similique quas. In expedita
        reiciendis dolorum, nisi ex beatae consectetur. Sequi necessitatibus
        tenetur a, deleniti maxime blanditiis voluptate excepturi nam hic ex,
        eos iste illo.
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
