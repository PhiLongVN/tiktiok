import React from 'react';
import classNames from 'classnames/bind';
import Account from '-/component/Account';
import { useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';
import styles from '-/component/SearchBar/SearchBar.module.scss';
let cx = classNames.bind(styles);

function SearchBar() {
  const inputFocus = useRef();
  const [showBox, setShowBox] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState([]);

  // interactive-SearchText-------------

  const handleDelete = () => {
    setSearchText('');
    inputFocus.current.focus();
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleCLickOutSide = () => {
    setShowBox(false);
  };
  // ---------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less')
      .then((res) => res.json())
      .then((res) => {
        setResult(res.data);
      });
  }, [searchText]);

  return (
    <Tippy
      render={(attrs) => (
        <div {...attrs} className={cx('box')} tabIndex="-1" {...attrs}>
          <h3>Account title</h3>
          {result.map((val) => {
            return <Account data={val} />;
          })}
        </div>
      )}
      interactive
      visible={searchText.length > 0 && showBox}
      onClickOutside={handleCLickOutSide}
    >
      <div className={cx('search')}>
        <input
          onFocus={() => {
            setShowBox(true);
          }}
          ref={inputFocus}
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
  );
}

export default SearchBar;
