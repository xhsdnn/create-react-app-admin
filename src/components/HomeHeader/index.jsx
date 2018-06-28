import React from 'react';
import './home-header.css'

import BaseInfo from '../BaseInfo'

class Header extends React.Component {
  render() {
    return (
      <div className="home-header">
        {/* 其他信息 */}
        {/* 头像及基本信息 */}
        <BaseInfo />
      </div>
    );
  }
}

export default Header;