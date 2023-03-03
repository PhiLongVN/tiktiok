import React from 'react';
import Tippy from '@tippyjs/react';

export default function Home() {
  return (
    <div>
      <Tippy
        duration={100}
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            My tippy box
          </div>
        )}
      >
        <button>My button</button>
      </Tippy>
    </div>
  );
}
