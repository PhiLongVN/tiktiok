import React from 'react';
import styles from '-/component/Button/Button.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

let cx = classNames.bind(styles);

function Button({
  children,
  icon,
  primary,
  round,
  outline,
  iconOnly,
  classNames,
  to,
  href,
  numberIb,
}) {
  let classes = cx('wrapper', {
    primary,
    round,
    outline,
    iconOnly,
    [classNames]: classNames,
  });

  let Comp = 'button';
  let props = {};

  if (href) {
    Comp = 'a';
    props.href = href;
    props.target = '_blank';
  } else if (to) {
    Comp = Link;
    props.to = to;
  }

  return (
    <Comp className={classes} {...props}>
      {icon && (
        <span className={cx('icon')}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span>{children}</span>
      {numberIb && <span className={cx('numberIb')}>{numberIb}</span>}
    </Comp>
  );
}

export default Button;
