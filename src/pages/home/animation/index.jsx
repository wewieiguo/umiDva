import React from 'react';
import { demoList } from './config';
import styles from './index.less';
export default function Animation() {
  return (
    <header className={styles['app-header']}>
      {demoList.map((elem, index) => {
        return (
          <div key={elem.key} className={styles['item-style']}>
            <div
              className={styles['item-aside']}
              style={{
                borderColor: elem.color,
                borderBottomColor: 'transparent',
              }}
            >
              <div
                className={styles['item-center']}
                style={{
                  borderColor: elem.centerColor,
                  borderBottomColor: 'transparent',
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </header>
  );
}
