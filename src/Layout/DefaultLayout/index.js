import Header from '-/component/Header';
import SideBar from '-/component/SideBar';
import React from 'react';
import '-/Layout/DefaultLayout/DefaultLayout.scss';
function DefaultLayout({ children }) {
  return (
    <div >
      <Header />

      <div className="container-default">
        <SideBar />
        aaaa
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
