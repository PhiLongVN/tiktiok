import classNames from 'classnames/bind';
import styles from '-/component/Account/Account.module.scss';
import { AiFillCheckCircle } from 'react-icons/ai';

import React from 'react';

let cx = classNames.bind(styles);
function Account(data) {
  return (
    <div className={cx('acc-block')}>
      <img
        src="https://th.bing.com/th?id=ORMS.fc540491583dbad5dde2419fbc4d1eb4&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
        alt=""
      />
      <div>
        <p className={cx('title')} >
          <span>long</span>
          <AiFillCheckCircle />
        </p>
        <h4>long</h4>
      </div>
    </div>
  );
}

export default Account;
