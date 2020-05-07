import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import withRouter from 'umi/withRouter';
import router from 'umi/router';
import { NAVMENU_CONFIG } from '../../../utils/config';
function Header(props) {
  const [current, setCurrent] = useState('');
  useEffect(() => {
    setCurrent(props.location.pathname);
  }, [props.location.pathname]);
  const handleClick = e => {
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        {NAVMENU_CONFIG.map((elem, index) => {
          return <Menu.Item key={elem.path}>{elem.title}</Menu.Item>;
        })}
      </Menu>
    </div>
  );
}
export default withRouter(Header);
