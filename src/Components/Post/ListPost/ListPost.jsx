import React, { Component } from 'react';
import './ListPost.css';
import 'antd/dist/antd.css';
import { List, Card, Typography, Tag, Select, Button, Icon, Form, Input, Row, Col, Modal, Statistic } from 'antd';

import { connect } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import { Link, Redirect } from 'react-router-dom';

const { Countdown } = Statistic;
const { Text, Title } = Typography;
const { Meta } = Card;
const { Option } = Select;

const deadline = (id) => {
	return Date.now() + 1000 * 60 * id;
};

function warning(id) {
	Modal.warning({
		title: 'Thông báo bài viết chờ duyệt',
		content: `${id}`
	});
}
class ListPost extends Component {
	state = {
		visibleAccept: false,
		visibleReject: false,
		isOutStd: false,
		visiblePreview: false,
		id: 0
	};

	onFinish = (id) => {
		warning(id);
	};
	onChange = (value) => {
		value === 'special' ? this.setState({ isOutStd: true }) : this.setState({ isOutStd: false });
	};
	showModalPreview = (id) => {
		this.setState({
			visiblePreview: true,
			id: id
		});
	};
	handleCancelPreview = () => {
		this.setState({
			visiblePreview: false
		});
	};

	showModalAccept = (id) => {
		this.setState({
			visibleAccept: true,
			id: id
		});
	};

	showModalReject = (id) => {
		this.setState({
			visibleReject: true,
			id: id
		});
	};
	handleOkAccept = (e) => {
		console.log(e);
		this.setState({
			visibleAccept: false
		});
	};
	handleOkReject = (e) => {
		console.log(e);
		this.setState({
			visibleReject: false
		});
	};
	handleCancelAccept = (e) => {
		console.log(e);
		this.setState({
			visibleAccept: false
		});
	};
	handleCancelReject = (e) => {
		console.log(e);
		this.setState({
			visibleReject: false
		});
	};
	render() {
		const { data, tit, username, status } = this.props;

		const { isOutStd, id } = this.state;
		const recentItem = data.filter((item) => item.id === this.state.id)[0];
		console.log('dqwdqwdqd', recentItem);
		return (
			<div>
				{' '}
				<Typography>
					<div
						style={{
							marginBottom: 15,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}
					>
						<Title level={4}>{tit}</Title>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between'
							}}
						>
							<Select
								showSearch
								style={{ width: 200, margin: '0px 15px' }}
								placeholder="Chọn chuyên mục"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								<Option value="1">Đời sống</Option>
								<Option value="2">Xã hội</Option>

								<Option value="3">Thời sự trong nước</Option>
								<Option value="4">Thời sự quốc tế</Option>
								<Option value="5">Thể thao trong nước</Option>
								<Option value="6">Thể theo thế giới</Option>
								<Option value="7">Kinh tế</Option>
							</Select>
							<Select
								showSearch
								style={{ width: 200, margin: '0px 15px' }}
								placeholder="Chọn cách sắp xếp"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								<Option value="new">Mới nhất</Option>
								<Option value="old">Cũ nhất</Option>
							</Select>
							<Button icon="plus" type="primary">
								<Link to="/admin/create-post" style={{ color: 'white' }}>
									{' '}
									Tạo bài viết
								</Link>
							</Button>
						</div>
					</div>
					<List
						pagination={{ pageSize: 8 }}
						grid={{ gutter: [ 40, 20 ], column: 4 }}
						dataSource={data}
						renderItem={(item) => (
							<div>
								<List.Item>
									{status === 0 ? (
										//Post is pending
										<Card
											onClick={(e) => this.showModalPreview(item.id)}
											style={{
												position: 'relative',
												display: 'flex',
												flexDirection: 'column',
												minHeight: 450,
												boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px'
											}}
											hoverable
											cover={
												<img
													style={{ width: '100%', height: 180, minHeight: 180 }}
													alt={item.title}
													src={item.img}
												/>
											}
										>
											{' '}
											<Tag
												style={{
													position: 'absolute',
													top: 5,
													right: 0,
													display: 'flex',
													flexDirection: 'row',
													alignContent: 'center'
												}}
												color="volcano"
											>
												<Icon type="clock-circle" style={{ paddingTop: 4, marginRight: 5 }} />
												{username === 'editor' ? (
													<Countdown
														style={{ fontSize: 12 }}
														value={deadline(item.id)}
														onFinish={(e) => this.onFinish(item.title)}
													/>
												) : (
													<Countdown style={{ fontSize: 12 }} value={deadline(item.id)} />
												)}
											</Tag>
											<div>
												<Text style={{ fontSize: 18 }} strong>
													{item.title}
												</Text>
											</div>
											<div>
												<Text style={{ fontSize: 14 }}>{item.des}</Text>
											</div>
											<div style={{ marginTop: 10 }}>
												<Text>
													<span style={{ color: 'peru', fontWeight: 'bold' }}>
														{item.cate}{' '}
													</span>| {item.date}
												</Text>
											</div>
											<div style={{ position: 'absolute', top: 5, left: 5 }}>
												{' '}
												{item.status === 1 ? (
													<Tag color="#87d068">Đã đăng</Tag>
												) : item.status === -1 ? (
													<Tag color="#f50">Bị từ chối</Tag>
												) : (
													<Tag color="#108ee9">Đang chờ</Tag>
												)}
											</div>
											{username === 'writer' ? (
												<div
													style={{
														position: 'absolute',
														bottom: 10,
														left: 15,
														right: 15,
														display: 'flex',
														flexDirection: 'row',
														justifyContent: 'space-between'
													}}
												>
													<Button icon="edit" type="primary">
														Sửa bài
													</Button>
													<Button icon="delete" type="danger">
														Gỡ bài
													</Button>
												</div>
											) : (
												<div
													style={{
														position: 'absolute',
														bottom: 10,
														left: 15,
														right: 15,
														display: 'flex',
														flexDirection: 'row',
														justifyContent: 'space-between'
													}}
												>
													<Button icon="eye" type="primary" ghost style={{ width: '100%' }}>
														Duyệt bài viết
													</Button>
												</div>
											)}
										</Card>
									) : (
										//Post # pending
										<Card
											style={{
												display: 'flex',
												flexDirection: 'column',
												minHeight: 450,
												boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px'
											}}
											hoverable
											cover={<img alt={item.title} src={item.img} />}
										>
											<Tag style={{ position: 'absolute', top: 5, right: 0 }} color="geekblue">
												<Icon type="user" style={{ marginRight: 5 }} />
												{item.writer}
											</Tag>
											<div>
												<Text style={{ fontSize: 18 }} strong>
													{item.title}
												</Text>
											</div>
											<div style={{ fontSize: 15, marginTop: 5 }}>
												<Text>{item.des}</Text>
											</div>
											<div style={{ marginTop: 10 }}>
												<Text>
													<span style={{ color: 'orange' }}>{item.cate} </span>| {item.date}
												</Text>
											</div>
											<div style={{ position: 'absolute', top: 5, left: 5 }}>
												{' '}
												{item.status === 1 ? (
													<Tag color="#87d068">Đã đăng</Tag>
												) : item.status === -1 ? (
													<Tag color="#f50">Bị từ chối</Tag>
												) : (
													<Tag color="#108ee9">Đang chờ</Tag>
												)}
											</div>
											{status === -1 && username === 'writer' ? (
												<div
													style={{
														position: 'absolute',
														bottom: 10,
														left: 15,
														right: 15,
														display: 'flex',
														flexDirection: 'row',
														justifyContent: 'space-between'
													}}
												>
													<Button icon="eye" type="primary" ghost style={{ width: '100%' }}>
														Duyệt bài viết
													</Button>
												</div>
											) : (
												<div />
											)}
										</Card>
									)}
								</List.Item>
								<Modal
									style={{ top: 20 }}
									title="Đăng bài viết"
									visible={this.state.visibleAccept}
									onOk={(e) =>
										this.setState({
											visibleAccept: false,
											visiblePreview: false
										})}
									onCancel={this.handleCancelAccept}
									okText="Đăng bài"
									cancelText="Hủy"
								>
									<Form layout="vertical">
										<Form.Item label="Tiêu đề bài viết">
											<Input value={id === 0 ? '' : recentItem.title} />
										</Form.Item>
										<Form.Item label="Tóm tắt nội dung bài viết">
											<TextArea cols={2} value={id === 0 ? '' : recentItem.des} />
										</Form.Item>

										<Form.Item label="Chuyên mục">
											<Select
												mode="multiple"
												style={{ width: '100%' }}
												placeholder="select one country"
												value={[ `${id === 0 ? '' : recentItem.cate}` ]}
												optionLabelProp="label"
											/>
										</Form.Item>
										<Form.Item label="Nhãn tags">
											<Select
												mode="tags"
												style={{ width: '100%' }}
												value={[ `${id === 0 ? '' : recentItem.cate}` ]}
												optionLabelProp="label"
											/>
										</Form.Item>
										<Row gutter={20}>
											<Col span={12}>
												<Form.Item label="Loại bài viết">
													<Select
														onChange={this.onChange}
														showSearch
														value="normal"
														style={{ width: 200 }}
														placeholder="Select a person"
														optionFilterProp="children"
														filterOption={(input, option) =>
															option.props.children
																.toLowerCase()
																.indexOf(input.toLowerCase()) >= 0}
													>
														<Option value="normal">Bài viết thường</Option>
														<Option value="special">Bài viết nổi bật</Option>
													</Select>
												</Form.Item>
											</Col>
											{isOutStd ? (
												<Col span={12}>
													<Form.Item label="Chọn vị trí">
														<Select
															showSearch
															value="one"
															style={{ width: 200 }}
															placeholder="Select a person"
															optionFilterProp="children"
															filterOption={(input, option) =>
																option.props.children
																	.toLowerCase()
																	.indexOf(input.toLowerCase()) >= 0}
														>
															<Option value="one">Vị trí 1</Option>
															<Option value="two">Vị trí 2</Option>
															<Option value="three">Vị trí 3</Option>
														</Select>
													</Form.Item>
												</Col>
											) : null}
										</Row>
									</Form>
								</Modal>
								<Modal
									style={{ top: 20 }}
									title="Từ chối bài viết"
									visible={this.state.visibleReject}
									onOk={(e) => {
										this.setState({
											visibleReject: false,
											visiblePreview: false
										});
									}}
									onCancel={this.handleCancelReject}
									okText="Gửi nhận xét"
									cancelText="Hủy"
								>
									<Form layout="vertical">
										<Form.Item label="Tiêu đề bài viết">
											<Input readOnly value={id === 0 ? '' : recentItem.title} />
										</Form.Item>
										<Form.Item label="Nội dung tóm tắt bài viết">
											<Input readOnly value={id === 0 ? '' : recentItem.id} />
										</Form.Item>
										<Row gutter={20}>
											<Col span={12}>
												<Form.Item label="Phóng viên">
													<Input readOnly value={id === 0 ? '' : recentItem.writer} />
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item label="Thời gian tạo">
													<Input readOnly value={id === 0 ? '' : recentItem.date} />
												</Form.Item>
											</Col>
										</Row>

										<Form.Item label="Lời nhận xét">
											<TextArea
												cols={2}
												autoFocus
												placeholder="Nhập lời nhận xét về bài viết"
												value={'Bài viết tiêu đề sai, chưa phản ánh đúng nội dung bài viết'}
											/>
										</Form.Item>
									</Form>
								</Modal>
								<Modal
									style={{ top: 20, minWidth: 700 }}
									title="Xem trước bài viết"
									visible={this.state.visiblePreview}
									onCancel={this.handleCancelPreview}
									footer={null}
								>
									<Title level={4}>{id === 0 ? '' : recentItem.title}</Title>
									<p style={{ fontSize: '14px' }}>
										Viết bởi{' '}
										<span style={{ fontWeight: 'bold' }}>
											{id === 0 ? '' : recentItem.writer}
										</span>{' '}
										|{' '}
										<span style={{ color: 'peru', fontWeight: 500 }}>
											{id === 0 ? '' : recentItem.cate}
										</span>{' '}
										| {id === 0 ? '' : recentItem.date}
									</p>
									<p>{id === 0 ? '' : recentItem.des}</p>
									<div style={{ width: 'auto' }}>
										{id === 0 ? <div>Nội dung chưa có</div> : recentItem.content}
									</div>
									<div style={{ marginTop: 20, paddingBottom: 30 }}>
										<span>
											<Icon type="tags" />&ensp;Từ khóa:&ensp;
										</span>
										<Tag style={{ fontSize: 15, fontWeight: 500 }}>
											<span>
												<a href="https://github.com/ant-design/ant-design/issues/1862">
													Bóng đá Việt Nam
												</a>
											</span>
										</Tag>
										<Tag style={{ fontSize: 15, fontWeight: 500 }}>
											<span>
												<a href="https://github.com/ant-design/ant-design/issues/1862">
													Thể thao
												</a>
											</span>
										</Tag>
									</div>
									<div
										style={{
											position: 'absolute',
											bottom: 10,
											right: 10,
											width: '50%',
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'flex-end'
										}}
									>
										<Button
											icon="close"
											type="danger"
											style={{ marginRight: 20 }}
											onClick={(e) => this.showModalReject(item.id)}
										>
											Từ chối
										</Button>
										<Button
											icon="check"
											style={{ marginRight: 20 }}
											type="primary"
											onClick={(e) => this.showModalAccept(item.id)}
										>
											Duyệt bài
										</Button>
									</div>
								</Modal>
							</div>
						)}
					/>
				</Typography>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLogin: state.LoginReducer.isLogin,
	username: state.LoginReducer.username
});
export default connect(mapStateToProps, null)(ListPost);
