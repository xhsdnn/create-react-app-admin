import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'

import { Button } from 'antd';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1>Not Found</h1>
        <Button type="primary"><Link to="/">操作失败，重新登陆...</Link></Button>
      </div>
    );
  }
}

export default NotFound;