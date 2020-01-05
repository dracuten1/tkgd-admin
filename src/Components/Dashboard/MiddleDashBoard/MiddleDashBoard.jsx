import React, { Component } from 'react';
import '../DashBoard.css';
import 'antd/dist/antd.css';
import { Bar } from 'ant-design-pro/lib/Charts';

import { Redirect } from 'react-router-dom';
import { Avatar, Button, Col, Input, Row, Select, Tabs, Typography } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';

const { Title, Text } = Typography;
const { Option } = Select;
const { Search } = Input;
const { TabPane } = Tabs;

const quater = [
  { key: '1', label: 'Qúy 1' },
  { key: '2', label: 'Quý 2' },
  { key: '3', label: 'Quý 3' },
  { key: '4', label: 'Quý 4' }
];
const month = [
  {
    key: '01',
    label: 'Tháng 1'
  },
  {
    key: '02',
    label: 'Tháng 2'
  },
  {
    key: '03',
    label: 'Tháng 3'
  },
  {
    key: '04',
    label: 'Tháng 4'
  },
  {
    key: '05',
    label: 'Tháng 5'
  },
  {
    key: '06',
    label: 'Tháng 6'
  },
  {
    key: '07',
    label: 'Tháng 7'
  },
  {
    key: '08',
    label: 'Tháng 8'
  },
  {
    key: '09',
    label: 'Tháng 9'
  },
  {
    key: '10',
    label: 'Tháng 10'
  },
  {
    key: '11',
    label: 'Tháng 11'
  },
  {
    key: '12',
    label: 'Tháng 12'
  }
];
const revenueMonth = [];
for (let i = 0; i < 12; i += 1) {
  revenueMonth.push({
    x: 'Tháng ' + i,
    y: Math.floor(Math.random() * 15000000)
  });
}
const topTutor = [
  {
    x: 'Lê Ngọc Vũ',
    y: 450,
    z: 'teacher10@gmail.com'
  },
  {
    x: 'Bùi Tuấn Vũ',
    y: 400,
    z: 'teacher9@gmail.com'
  },
  {
    x: 'Từ Kim Huỳnh',
    y: 360,
    z: 'teacher7@gmail.com'
  },
  {
    x: 'Lê Thị Tuyết',
    y: 300,
    z: 'teacher6@gmail.com'
  },
  {
    x: 'Nguyễn Lê',
    y: 250,
    z: 'teacher1@gmail.com'
  }
];

class MiddleDashBoard extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    allContracts: [],
    contractsByStatus: [],
    topThreeTutorialHighestRevenue: [],
    databyquater: [],
    filterBy: 'byall',
    month: '',
    quater: '',
    year: 2019
  };

  componentDidMount() {
    const { idTeacher } = this.props;

    fetch(`http://localhost:4000/contract/getListContractByIdTeacher/${idTeacher}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          allContracts: data.filter((item) => item.status === 2)
        })
      )
      .catch((error) => {
        return error;
      });

    fetch(`http://localhost:4000/contract/getListTutorAndRevenue`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          topThreeTutorialHighestRevenue: data
        })
      )
      .catch((error) => {
        return error;
      });
  }

  render() {
    const { allContracts, topThreeTutorialHighestRevenue, filterBy, databyquater } = this.state;

    const topTutorFromDB = topThreeTutorialHighestRevenue.map((item) => ({
      x: item._id.nameTeacher,
      y: item.revenue,
      imageTeacher: item._id.imageTeacher
    }));

    const { isLogin } = this.props;
    if (isLogin === false) {
      return <Redirect to="/admin-login"/>;
    }
    const dataContracts = allContracts.map((item) => ({
      idContract: item.idContract,
      tutorName: item.nameTeacher,
      hirerName: item.nameStudent,
      dateContract: moment(item.dateContract).format('DD/MM/YYYY'),
      dateContractEnd: moment(item.dateContractEnd).format('DD/MM/YYYY'),
      totalMoneyContract: item.totalMoneyContract.toLocaleString('vi', { style: 'currency', currency: 'VND' }),
      cost: item.totalMoneyContract
    }));

    return (
      <div style={{ padding: '10px 20px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Top Writer theo số bài được đăng" key="1">
            <div style={{ width: '100%', margin: 10 }}>
              <span>Chọn tiêu chí xem &ensp;</span>
              <Select
                placeholder="Chọn thời gian"
                style={{ width: 200 }}
                onChange={(value) => {
                  this.setState({ filterBy: value });
                  console.log(value);
                }}
              >
                <Option value="byall">Tất cả</Option>
                <Option value="byweek">Top Writer theo tuần</Option>
                <Option value="bymonth">Top Writer theo tháng</Option>
                <Option value="byquater">Top Writer theo quý</Option>
              </Select>
              {filterBy === 'bymonth' ? (
                <Select
                  placeholder="Chọn tháng"
                  style={{ width: 150, marginLeft: 10 }}
                  onChange={(value) => this.setState({ month: value })}
                >
                  {month.map((item) => <Option value={item.key}>{item.label}</Option>)}
                </Select>
              ) : null}
              {filterBy === 'byquater' ? (
                <Select
                  placeholder="Chọn quý"
                  style={{ width: 150, marginLeft: 10 }}
                  onChange={(value) => this.setState({ quater: value })}
                >
                  {quater.map((item) => <Option value={item.key}>{item.label}</Option>)}
                </Select>
              ) : null}

              <Select
                defaultValue={2019}
                style={{ width: 'auto', marginLeft: 10 }}
                onChange={(value) => this.setState({ year: value })}
              >
                <Option value={2019}>2019</Option>
                <Option value={2020}>2020</Option>
              </Select>
              <Button
                style={{ marginLeft: 10 }}
                type="primary"
                onClick={(event) => {
                  const filter =
                    filterBy === 'bymonth'
                      ? this.state.month
                      : filterBy === 'byquater' ? this.state.quater : null;

                  if (filterBy === 'bymonth')
                    fetch(
                      `http://localhost:4000/contract/getListTutorAndRevenueByMonth/${this.state
                        .year}/${filter}`
                    )
                      .then((response) => response.json())
                      .then((data) =>
                        this.setState({
                          topThreeTutorialHighestRevenue: data
                        })
                      )
                      .catch((error) => {
                        return error;
                      });
                  else if (filterBy === 'byquater') {
                    fetch(
                      `http://localhost:4000/contract/getListTutorAndRevenueQuarter/${this.state
                        .year}/${filter}`
                    )
                      .then((response) => response.json())
                      .then((data) =>
                        this.setState({
                          topThreeTutorialHighestRevenue: data
                        })
                      )
                      .catch((error) => {
                        return error;
                      });
                  } else if (filterBy === 'byweek') {
                    fetch(`http://localhost:4000/contract/getListTutorAndRevenuCurrentWeek`)
                      .then((response) => response.json())
                      .then((data) =>
                        this.setState({
                          topThreeTutorialHighestRevenue: data
                        })
                      )
                      .catch((error) => {
                        return error;
                      });
                  } else {
                    fetch(
                      `http://localhost:4000/contract/getListTutorAndRevenueByMonth/${this.state
                        .year}/${filter}`
                    )
                      .then((response) => response.json())
                      .then((data) =>
                        this.setState({
                          topThreeTutorialHighestRevenue: data
                        })
                      )
                      .catch((error) => {
                        return error;
                      });
                  }
                }}
              >
                Xem top Writer
              </Button>
            </div>
            <Row gutter={20}>
              <Col span={16}>
                <Bar height={400} title="Thống kê số lượng bài của Writer" data={topTutor}/>
              </Col>
              <Col span={8}>
                <div style={{ width: '100%' }}>
                  <h4>
                    <span>Top Writer</span>
                  </h4>
                  <ol
                    style={{
                      listStyleType: 'none',
                      margin: 20,
                      padding: 0
                    }}
                  >
                    {topTutor.map((item, index) => (
                      <li
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          position: 'relative',
                          marginBottom: 10
                        }}
                      >
                        <div className="ranking ${}">
                          <Text className={`text-ranking top-${index + 1}`}>{index + 1}</Text>
                        </div>
                        <Avatar
                          style={{ marginRight: 5 }}
                          size="large"
                          src="https://img.favpng.com/10/10/6/computer-icons-blog-website-content-writer-portable-network-graphics-information-png-favpng-fpKDrYza27YKMuzZy64VejXi5.jpg"
                        />
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                          }}
                        >
                          <span style={{ color: 'blue' }}>{item.x}</span>
                        </div>
                        <span style={{ float: 'right', position: 'absolute', right: 0 }}>
													{item.y}
												</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Thống kê doanh thu" key="2">
            <div style={{ width: '100%', margin: 10 }}>
              <Select
                defaultValue="bymonth"
                style={{ width: 'auto' }}
                onChange={(value) => {
                  this.setState({ filterBy: value });
                  console.log(value);
                }}
              >
                <Option value="bymonth">Doanh thu theo tháng</Option>
                <Option value="byquater">Doanh thu theo quý</Option>
                <Option value="byyear">Doanh thu theo năm</Option>
              </Select>
              <Select
                defaultValue={2019}
                style={{ width: 'auto', marginLeft: 10 }}
                onChange={(value) => this.setState({ year: value })}
              >
                <Option value={2019}>2019</Option>
                <Option value={2020}>2020</Option>
              </Select>
            </div>
            <Bar height={300} title="Thống kê doanh thu" data={revenueMonth}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.LoginReducer.isLogin,
  nameTeacher: state.LoginReducer.name,
  idTeacher: state.LoginReducer.idUser
});
export default connect(mapStateToProps, null)(MiddleDashBoard);
