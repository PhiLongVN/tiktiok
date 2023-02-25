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
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(true);
  // interactive-SearchText-------------

  const handleDelete = () => {
    setSearchText('');
    inputFocus.current.focus();
    setResult([]);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    // setLoading(true);
  };
  const handleCLickOutSide = () => {
    setShowBox(false);
  };
  // ---------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    if (searchText.trim() === '') {
      setResult([]);
      return;
    }
    setLoaded(false);
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURI(
        searchText
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setLoaded(true);
        setLoading(false);
        setResult(res.data);
      });
  }, [searchText]);

  return (
    <Tippy
      render={(attrs) => (
        <div {...attrs} className={cx('box')} tabIndex="-1" {...attrs}>
          <h3>Account title</h3>
          {result.map((val) => {
            return <Account name={val.full_name} key={val.id} data={val} />;
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
          {/* loading */}
          <span className={cx('loading')}>
            {loading && <AiOutlineLoading3Quarters />}
          </span>

          {/* loaded */}
          <span className={cx('loaded')}>
            {loaded && searchText.length > 0 && (
              <TiDelete onClick={handleDelete} />
            )}
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
