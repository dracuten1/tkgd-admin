import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Table, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
	{
		title: 'Chuyên mục',
		dataIndex: 'cate_name',
		key: 'cate_name',
		render: (text) => <a>{text}</a>
	},
	{
		title: 'Số bài viết',
		dataIndex: 'num_post',
		key: 'num_post'
	},
	{
		title: 'Số bài chờ duyệt',
		dataIndex: 'num_pen',
		key: 'num_pen'
	},
	{
		title: 'Số bài đã đăng',
		dataIndex: 'num_pub',
		key: 'num_pub'
	},
	{
		title: 'Số bài từ chối',
		key: 'num_rec',
		dataIndex: 'num_rec'
	},
	{
		title: 'Thao tác',
		key: 'action',
		render: (text, record) => (
			<span>
				<Link to="/admin/view-pending-post">Xem chuyên mục{record.name}</Link>
			</span>
		)
	}
];

const data = [
	{
		key: '1',
		cate_name: 'Thời sự',
		num_post: 15,
		num_pen: 2,
		num_pub: 13,
		num_rec: 0
	},
	{
		key: '2',
		cate_name: 'Đời sống',
		num_post: 15,
		num_pen: 2,
		num_pub: 13,
		num_rec: 0
	},
	{
		key: '3',
		cate_name: 'Xã hội',
		num_post: 30,
		num_pen: 4,
		num_pub: 25,
		num_rec: 1
	},
	{
		key: '4',
		cate_name: 'Thể thao',
		num_post: 15,
		num_pen: 2,
		num_pub: 13,
		num_rec: 0
	}
];

class CateEditor extends Component {
	render() {
		return (
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		);
	}
}
export default CateEditor;
