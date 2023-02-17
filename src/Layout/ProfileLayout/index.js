import Header from '-/component/Header';
import SideBar from '-/component/SideBar';
import React from 'react';
import '-/Layout/ProfileLayout/ProfileLayout.scss';
function ProfileLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="container-profile">
        <SideBar />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima, enim magnam velit natus facilis dolores perferendis ea doloribus optio ducimus accusantium reiciendis in vel similique quas. In expedita reiciendis dolorum, nisi ex beatae consectetur. Sequi necessitatibus tenetur a, deleniti maxime blanditiis voluptate excepturi nam hic ex, eos iste illo.
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
