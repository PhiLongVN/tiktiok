import classNames from 'classnames/bind';
import styles from '-/component/Switch/Switch.module.scss';
import React from 'react';
import { useState } from 'react';

function Switch(props) {
  const [theme, setTheme] = useState('light');
  let cx = classNames.bind(styles);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    props.handleTheme(theme);
  };

  return (
    <div className={cx('ball')} onClick={toggleTheme}>
      <label htmlFor="input" className={cx('switch')}>
        <input id="input" type="checkbox" />
        <span className={cx('slider')}></span>
      </label>
    </div>
  );
}

export default Switch;
