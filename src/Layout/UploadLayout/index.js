import Header from '-/component/Header';
import SideBar from '-/component/SideBar';
import React from 'react';
import '-/Layout/UploadLayout/UploadLayout.scss';
function UploadLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="container-update">
        <SideBar />
        <p>Loremolor, earum? Deserunt, eum.</p>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default UploadLayout;
