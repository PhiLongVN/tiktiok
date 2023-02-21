import React from 'react';
import styles from '-/component/Popup/Popup.module.scss';
import classNames from 'classnames/bind';
import Item from './PopUpItem';
import { useState } from 'react';

import {
  faBackwardFast,
  faHandsHelping,
  faKeyboard,
  faMoon,
  faSortAlphaDown,
} from '@fortawesome/free-solid-svg-icons';
import HeaderLanguage from './Header';

let cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: faSortAlphaDown,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'vi',
          title: 'Việt Nam',
        },
        {
          code: 'en',
          title: 'English',
          children: {
            data: [
              {
                code: 'vi',
                title: 'Việt Nam 2',
              },
              {
                code: 'vi',
                title: 'Nam',
              },
              {
                code: 'vi',
                title: 'Việt',
              },
            ],
          },
        },
        {
          code: 'ja',
          title: 'Nhật',
        },
        {
          code: 'ge',
          title: 'Đức',
        },
      ],
    },
  },
  {
    icon: faHandsHelping,
    title: 'Feedback and Help',
    href: 'https://www.youtube.com/watch?v=LPGQoWG7pno&list=PL_-VfJajZj0XHWBAxzGh1bZPACRbjbro3&index=11',
  },
  { icon: faKeyboard, title: 'Keyboard Shortcut' },
  { icon: faMoon, title: 'Dark Mode', theme: true },
];

function Popup({ handleTheme }) {
  const [history, setHistory] = useState([{ data: MENU_ITEMS }]);

  const current = history[history.length - 1];

  return (
    <div className={cx('pop-up')}>
      <HeaderLanguage icon={faBackwardFast} title="Language" />
      {current.data.map((ele, index) => {
        return (
          <Item key={index} theme={ele.theme} href={ele.href} icon={ele.icon}>
            {ele.title}
          </Item>
        );
      })}
    </div>
  );
}

export default Popup;
