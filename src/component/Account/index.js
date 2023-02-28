import classNames from 'classnames/bind';
import styles from '-/component/Account/Account.module.scss';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import Image from '../Image';

import React from 'react';

let cx = classNames.bind(styles);
function Account({ data }) {
  return (
    <Link to={data.nickname} className={cx('acc-block')}>
      <Image src={data.src} />
    
      <div>
        <p className={cx('title')}>
          <span>{data.full_name}</span>
          {data.tick && <AiFillCheckCircle className={cx('icon')} />}
        </p>
        <h4>{data.nickname}</h4>
      </div>
    </Link>
  );
}

export default Account;
