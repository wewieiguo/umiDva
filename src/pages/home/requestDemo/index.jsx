import React, { useState, useEffect } from 'react';
import { requestDemoApi } from '@/services/requestDemo';
export default function RequestDemo() {
  const [demoList, setDemoList] = useState([]);
  useEffect(() => {
    (async () => {
      const { code, data } = await requestDemoApi();
      if (code === '200' && data) {
        setDemoList(data);
      }
    })();
  }, []);
  return (
    <div>
      {demoList && demoList.length
        ? demoList.map((elem, index) => {
            return (
              <p key={elem.id}>
                <span>{elem.time}</span>&emsp;
                <span>{elem.content}</span>
              </p>
            );
          })
        : ''}
    </div>
  );
}
