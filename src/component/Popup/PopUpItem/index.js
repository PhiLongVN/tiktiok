import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '-/component/Popup/Popup.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import Switch from '-/component/Switch';
import { Link } from 'react-router-dom';

let cx = classNames.bind(styles);

function Item({
  onClick,
  children,
  icon,
  theme = false,
  to,
  href,
  target,
  separate,
  ...plusProp
}) {
  const props = {
    onClick,
  };

  let Comp = 'div';

  if (href) {
    Comp = 'a';
    props.href = href;
    props.target = '_blank';
  } else if (to) {
    Comp = Link;
    props.to = to;
  }
  let classes = cx('list', {
    separate: separate,
  });
  return (
    <Comp className={classes} {...props} {...plusProp}>
      {icon && (
        <span className={cx('icon')}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}

      <h4 className={cx('title')}>{children}</h4>

      {theme && <Switch />}
    </Comp>
  );
}

export default Item;
