import React from 'react';
import styles from '-/component/Popup/Popup.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let cx = classNames.bind(styles);

function HeaderLanguage({ title, icon }) {
  return (
    <div className={cx('header-lang')}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <h4>{title}</h4>
    </div>
  );
}

export default HeaderLanguage;
