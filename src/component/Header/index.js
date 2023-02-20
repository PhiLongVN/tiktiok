import React from 'react';
import styles from '-/component/Header/Header.module.scss';
import classNames from 'classnames/bind';
import Switch from '../Switch';
import logo from '-/assets/logo/logo.svg';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';
import styled from 'styled-components';

import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { HiOutlineDotsVertical, HiPlus } from 'react-icons/hi';
import { BsKeyboard, BsSortAlphaDown } from 'react-icons/bs';
import { CiDark } from 'react-icons/ci';
import { GrHelp } from 'react-icons/gr';
import { useState } from 'react';

const Box = styled(motion.div)`
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  width: 100%;
`;
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

  let cx = classNames.bind(styles);
  const [searchResult, setsSarchResult] = useState([1]);

  return (
    <div className={cx('header')}>
      <div className={cx('inner-header')}>
        {/* logo */}
        <img src={logo} alt="tik-tok-logo" />
        {/* search */}

        <Tippy
          render={(attrs) => (
            <Box
              style={{ scale, opacity }}
              {...attrs}
              className={cx('box')}
              tabIndex="-1"
              {...attrs}
            >
              My tippy box
            </Box>
          )}
          visible={searchResult.length > 0}
          animation={true}
          onMount={onMount}
          onHide={onHide}
        >
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
        </Tippy>

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
                  <Switch handleTheme={props.handleTheme} />
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
