import React from 'react';
import './SideBar.css';
import 'antd/dist/antd.css';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBarEditor extends React.Component {
  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link style={{ fontSize: 15 }} to="/admin">
            <Icon style={{ fontSize: 20 }} type="fund" />
            Trang chủ
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link style={{ fontSize: 15 }} to="/admin/create-post">
            <Icon style={{ fontSize: 20 }} type="file-add" />
            Tạo bài viết
          </Link>
        </Menu.Item>
        <Menu.Item key="12">
          <Link style={{ fontSize: 15 }} to="/admin/view-cate">
            <Icon style={{ fontSize: 20 }} type="appstore" />
            Chuyên mục phụ trách
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link style={{ fontSize: 15 }} to="/admin/view-pending-post">
            <Icon style={{ fontSize: 20 }} type="file-sync" />
            Bài viết chờ duyệt
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link style={{ fontSize: 15 }} to="/admin/view-accepted-post">
            <Icon style={{ fontSize: 20 }} type="file-done" />
            Bài viết đã duyệt
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link style={{ fontSize: 15 }} to="/admin/view-rejected-post">
            <Icon style={{ fontSize: 20 }} type="exception" />
            Bài viết bị từ chối
          </Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link style={{ fontSize: 15 }} to="/admin/view-schedule">
            <Icon style={{ fontSize: 20 }} type="carry-out" />
            Lịch làm việc
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link style={{ fontSize: 15 }} to="/setup">
            <Icon style={{ fontSize: 20 }} type="setting" />
            Cài đặt
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default SideBarEditor;
