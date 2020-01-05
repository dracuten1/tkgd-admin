import React from 'react';
import './SideBar.css';
import 'antd/dist/antd.css';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

class SideBarAdmin extends React.Component {
	render() {
		return (
			<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]} style={{ height: '100%', borderRight: 0 }}>
				<Menu.Item key="1">
					<Link to="/admin/view-dashBoard">
						<Icon type="home" />
						Trang chủ
					</Link>
				</Menu.Item>
				<SubMenu
					key="sub1"
					title={
						<span>
							<Icon type="user" />
							Thống kê bài viết
						</span>
					}
				>
					<Menu.Item key="2">
						<Link to="/admin/view-posts">Danh sách bài viết</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/admin/view-list-user">Thống kê bài viết</Link>
					</Menu.Item>
				</SubMenu>

				<Menu.Item key="4">
					<Link to="/admin/skills">
						<Icon type="tags" />
						Quản lý chuyên mục
					</Link>
				</Menu.Item>
				<Menu.Item key="5">
					<Link to="/admin/skills">
						<Icon type="tags" />
						Quản lý nhãn tags
					</Link>
				</Menu.Item>

				<Menu.Item key="6">
					<Link to="/admin/statistic-revenue">
						<Icon type="fund" />
						Thống kê doanh thu
					</Link>
				</Menu.Item>
				<SubMenu
					key="7"
					title={
						<span>
							<Icon type="notification" />
							Quản lý nhân viên
						</span>
					}
				>
					<Menu.Item key="8">
						<Link to="/admin/complaint" />Thêm nhân viên
					</Menu.Item>
					<Menu.Item key="9">
						<Link to="/admin/complaint" />Danh sách nhân viên
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key="7"
					title={
						<span>
							<Icon type="notification" />
							Quản lý khiếu nại
						</span>
					}
				>
					<Menu.Item key="10">
						<Link to="/admin/complaint" />Danh sách khiếu nại
					</Menu.Item>
				</SubMenu>
			</Menu>
		);
	}
}

const mapStateToProps = (state) => ({
	isLogin: state.LoginReducer.isLogin,
	username: state.LoginReducer.username
});
export default SideBarAdmin;
