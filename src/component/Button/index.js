import React from 'react';
import styles from '-/component/Button/Button.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let cx = classNames.bind(styles);

function Button({ children, icon, primary, round, outline, classNames }) {
  let classes = cx('wrapper', {
    primary,
    round,
    outline,
    [classNames]: classNames,
  });

  return (
    <button className={classes}>
      {icon && (
        <span className={cx('icon')}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

export default Button;
