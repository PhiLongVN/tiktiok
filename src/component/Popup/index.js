import React from 'react';
import styles from '-/component/Popup/Popup.module.scss';
import classNames from 'classnames/bind';
import Item from './PopUpItem';
import { useState } from 'react';

import {
  faBackwardFast,
  faCoins,
  faGear,
  faHandsHelping,
  faKeyboard,
  faMoon,
  faRightFromBracket,
  faSortAlphaDown,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeaderLanguage from './HeaderLanguage';

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

const MENU_USER_ITEMS = [
  { icon: faUser, title: 'View Profile', to: '/profile' },
  { icon: faCoins, title: 'Get Coins', to: '/coin' },
  { icon: faGear, title: 'Setting', to: '/setting' },
  ...MENU_ITEMS,
  { icon: faRightFromBracket, title: 'Log Out', to: '/out', separate: "true" },
];

function Popup({ isUser }) {
  let items = isUser ? MENU_USER_ITEMS : MENU_ITEMS;
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const handleExpand = (ele, isParent) => {
    if (isParent) {
      setHistory((prev) => [...prev, ele.children]);
    }
  };
  const handleBack = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };
  const handleLeave = () => {
    setTimeout(() => {
      setHistory((prev) => prev.slice(0, 1));
    }, 700);
  };

  return (
    <div onMouseLeave={handleLeave} className={cx('pop-up')}>
      {history.length > 1 && (
        <HeaderLanguage
          icon={faBackwardFast}
          title="Language"
          onClick={handleBack}
        />
      )}

      {current.data.map((ele, index) => {
        let isParent = !!ele.children;
        return (
          <Item
            key={index}
            theme={ele.theme}
            href={ele.href}
            to={ele.to}
            icon={ele.icon}
            separate={ele.separate}
            onClick={() => {
              handleExpand(ele, isParent);
            }}
          >
            {ele.title}
          </Item>
        );
      })}
    </div>
  );
}

export default Popup;
