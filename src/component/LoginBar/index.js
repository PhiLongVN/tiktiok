import React from 'react';
import styles from '-/component/LoginBar/LoginBar.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import Popup from '-/component/Popup';
import Button from '-/component/Button';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {
  faMessage,
  faPaperPlane,
  faPlusSquare,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

let cx = classNames.bind(styles);
function LoginBar({ isUser = false }) {
  return (
    <div className={cx('log')}>
      {isUser ? (
        <>
          <Tippy
            duration={0}
            className={cx('icon-hover')}
            content="Upload"
            placement="bottom"
          >
            <span>
              <Button to={'upload'} iconOnly icon={faUpload}></Button>
            </span>
          </Tippy>
          <Tippy
            duration={0}
            className={cx('icon-hover')}
            content="Send"
            placement="bottom"
          >
            <span>
              <Button to={'upload'} iconOnly icon={faPaperPlane}></Button>
            </span>
          </Tippy>
          <Tippy
            duration={0}
            className={cx('icon-hover')}
            content="Messeses"
            placement="bottom"
          >
            <span>
              <Button
                to={'mess'}
                iconOnly
                classNames={cx('mess')}
                icon={faMessage}
                numberIb="15"
              ></Button>
            </span>
          </Tippy>
          <div className={cx('avatar')}>
            <img
              src="https://th.bing.com/th?id=ORMS.fc540491583dbad5dde2419fbc4d1eb4&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
              alt="avatar"
            />
            <div style={{ right: '10px' }} className={cx('triangle')}></div>
            <Popup isUser={true} />
          </div>
        </>
      ) : (
        <>
          <Button outline icon={faPlusSquare}>
            Upload
          </Button>
          <Button primary>Log in</Button>

          <div className={cx('dot')}>
            <HiOutlineDotsVertical />
            <div className={cx('triangle')}></div>
            <Popup isUser={false} />
          </div>
        </>
      )}
    </div>
  );
}

export default LoginBar;
