import React from 'react';
import './tables.css'

import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [];

const names = ['John Brown', 'Jim Green', 'Joe Black', 'Disabled User'];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: names[Math.floor(Math.random()*4)],
    age: Math.floor(Math.random()*100),
    address: `London Park no. ${i}`,
  });
}

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class Tables extends React.Component {
  render() {
    return (
      <div className="tables">
        <span>Tables</span>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Tables;