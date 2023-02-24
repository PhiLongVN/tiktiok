import React from 'react';
import styles from '-/Layout/-MainComponents/Header/Header.module.scss';
import classNames from 'classnames/bind';
import logo from '-/assets/logo/logo.svg';
import Popup from '../../../component/Popup';
import Button from '-/component/Button';

import { HiOutlineDotsVertical } from 'react-icons/hi';
import {
  faMessage,
  faPlusSquare,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '-/component/SearchBar';

let cx = classNames.bind(styles);

function Header({ isUser = true }) {
  return (
    <div className={cx('header')}>
      <div className={cx('inner-header')}>
        {/* logo */}
        <img src={logo} alt="tik-tok-logo" />

        {/* search */}

        <SearchBar />

        {/* log in */}
        <div className={cx('log')}>
          {isUser ? (
            <>
              <Button to={'upload'} iconOnly icon={faUpload}></Button>
              <Button
                to={'mess'}
                iconOnly
                classNames={cx('mess')}
                icon={faMessage}
                numberIb="15"
              ></Button>
              <div className={cx('avatar')}>
                <img
                  src="https://th.bing.com/th?id=ORMS.fc540491583dbad5dde2419fbc4d1eb4&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt="avatar"
                />
                <div style={{ right: '10px' }} className={cx('triangle')}></div>
                <Popup isUser={true} />
              </div>
            </>
          ) : (
            <>
              <Button outline icon={faPlusSquare}>
                Upload
              </Button>
              <Button primary>Log in</Button>

              <div className={cx('dot')}>
                <HiOutlineDotsVertical />
                <div className={cx('triangle')}></div>
                <Popup isUser={false} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
