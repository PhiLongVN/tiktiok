import React from 'react';
import styles from '-/Layout/-MainComponents/Header/Header.module.scss';
import classNames from 'classnames/bind';
import Account from '../../../component/Acount';
import logo from '-/assets/logo/logo.svg';
import Popup from '../../../component/Popup';
import Button from '-/component/Button';

import Tippy from '@tippyjs/react/headless';
import { useSpring } from 'framer-motion';
import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useState } from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  //  animation
  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  function onMount() {
    scale.set(1);
    opacity.set(1);
  }

  function onHide({ unmount }) {
    const cleanup = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  }
  // ----------------

  // deleteSearchText
  const [searchText, setSearchText] = useState('');

  const handleDelete = () => {
    setSearchText('');
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  // ------------------------------

  let cx = classNames.bind(styles);
  const [searchResult, setsSarchResult] = useState([]);

  return (
    <div className={cx('header')}>
      <div className={cx('inner-header')}>
        {/* logo */}
        <img src={logo} alt="tik-tok-logo" />
        {/* search */}

        <Tippy
          render={(attrs) => (
            <div
              style={{ scale, opacity }}
              {...attrs}
              className={cx('box')}
              tabIndex="-1"
              {...attrs}
            >
              <h3>Account title</h3>
              <Account />
              <Account />
              <Account />
              <Account />
            </div>
          )}
          interactive
          visible={searchText.length > 0}
          animation={true}
          onMount={onMount}
          onHide={onHide}
        >
          <div className={cx('search')}>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Search accounts and videos"
            />
            <div className={cx('icon-load')}>
              <span>
                <TiDelete onClick={handleDelete} />
              </span>
              <span>
                <AiOutlineLoading3Quarters />
              </span>
            </div>
            <button className={cx('search-icon')}>
              <AiOutlineSearch />
            </button>
          </div>
        </Tippy>

        {/* log in */}
        <div className={cx('log')}>
          <Button outline icon={faPlusSquare}>
            Upload
          </Button>
          <Button primary>Log in</Button>

          <div className={cx('dot')}>
            <HiOutlineDotsVertical />
            <div className={cx('triangle')}></div>
            <Popup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
