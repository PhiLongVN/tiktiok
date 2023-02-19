import React from 'react';
import styles from '-/component/Header/Header.module.scss';
import classNames from 'classnames/bind';
import Switch from '../Switch';
import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { HiOutlineDotsVertical, HiPlus } from 'react-icons/hi';
import { BsKeyboard, BsSortAlphaDown } from 'react-icons/bs';
import { CiDark } from 'react-icons/ci';
import { GrHelp } from 'react-icons/gr';
import logo from '-/assets/logo/logo.svg';

function Header() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx('header')}>
      <div className={cx('inner-header')}>
        {/* logo */}
        <img src={logo} alt="tik-tok-logo" />
        {/* search */}
        <div className={cx('search')}>
          <input type="text" placeholder="Search accounts and videos" />
          <div className={cx('icon-load')}>
            <span>
              <TiDelete />
            </span>
            <span>
              <AiOutlineLoading3Quarters />
            </span>
          </div>
          <button className={cx('search-icon')}>
            <AiOutlineSearch />
          </button>
        </div>

        {/* log in */}
        <div className={cx('log')}>
          <button className={cx('upload')}>
            <HiPlus /> Upload
          </button>
          <button className={cx('log-in')}>Log in</button>
          <button className={cx('dot')}>
            <HiOutlineDotsVertical />
            <div className={cx('triangle')}></div>
            <div className={cx('pop-up')}>
              <ul>
                <li className={cx('list')}>
                  <BsSortAlphaDown />
                  <span>English</span>
                </li>
                <li className={cx('list')}>
                  <GrHelp />
                  <span>Feedback and Help</span>
                </li>
                <li className={cx('list')}>
                  <BsKeyboard />
                  <span>Keyboard Shortcut</span>
                </li>
                <li className={cx('list')}>
                  <CiDark />
                  <span>Dark Mode</span>
                  <Switch />
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
