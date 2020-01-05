import React from 'react';
import './SideBar.css';
import 'antd/dist/antd.css';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import SideBarAdmin from './SideBarAdmin';
import SideBarWriter from './SideBarWriter';
import { connect } from 'react-redux';
import SideBarEditor from './SideBarEditor';

const { Sider } = Layout;
const { SubMenu } = Menu;
class SideBar extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <Sider width={240} style={{ background: '#fff' }}>
        <div className="logo">
          <img
            sizes="50"
            alt="alt"
            className="avatar-admin"
            src="https://cdn4.iconfinder.com/data/icons/business-color-4/512/businessman-512.png"
          />
          <span className="name-admin">Member {username}</span>
        </div>
        {username === 'admin' ? (
          <SideBarAdmin />
        ) : username === 'editor' ? (
          <SideBarEditor />
        ) : (
          <SideBarWriter />
        )}
      </Sider>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.LoginReducer.isLogin,
  username: state.LoginReducer.username
});
export default connect(mapStateToProps, null)(SideBar);
