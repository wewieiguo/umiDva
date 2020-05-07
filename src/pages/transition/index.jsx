import React, { useState } from 'react';
import styles from './index.less';
export default function Transition() {
  const [state, setState] = useState(false);
  return (
    <div className={styles['container']}>
      <div className={styles['target-element']}></div>
      <div className={styles[state ? 'moving-element' : 'move-element']}></div>
      <div
        className={styles['click-style']}
        onClick={() =>
          setState(prev => {
            return !prev;
          })
        }
      >
        点击查看移动过渡效果
      </div>
    </div>
  );
}
