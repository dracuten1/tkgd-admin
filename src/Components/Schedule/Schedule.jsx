import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Schedule.css';

import { Calendar, Alert, Badge, List, Typography, Modal, Button } from 'antd';
import moment from 'moment';

function info(data, date) {
  Modal.info({
    title: `Danh sách công việc trong ngày ${date.format('DD-MM-YY')}`,
    content: (
      <div>
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[10:00 AM]</Typography.Text> {item.content}
            </List.Item>
          )}
        />
      </div>
    ),
    onOk() {}
  });
}
const getListData = value => {
  let listData;
  switch (value.date()) {
    case 4:
      listData = [
        {
          type: 'warning',
          content: 'Đi thu thập thông tin về tin tức thể thao.'
        },
        { type: 'success', content: 'Tham gia phỏng vấn buổi liên hoan phim.' }
      ];
      break;
    case 6:
      listData = [
        {
          type: 'warning',
          content: 'Đi thu thập thông tin về tin tức thể thao.'
        },
        { type: 'success', content: 'Tham gia phỏng vấn buổi liên hoan phim.' }
      ];
      break;
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'Đi thu thập thông tin về tin tức thể thao.'
        },
        { type: 'success', content: 'Tham gia phỏng vấn buổi liên hoan phim.' }
      ];
      break;
    case 9:
      listData = [
        { type: 'warning', content: 'Gặp đại diện bên đài THVL' },
        { type: 'success', content: 'Phân công phóng viên đi phỏng vấn MTV' },
        { type: 'error', content: 'Báo cáo' }
      ];
      break;
    case 12:
      listData = [
        { type: 'warning', content: 'Gặp đại diện bên đài THVL' },
        { type: 'success', content: 'Phân công phóng viên đi phỏng vấn MTV' },
        { type: 'error', content: 'Báo cáo' },
        { type: 'error', content: 'Chuyển bị nội dung phỏng vấn bên A' },
        { type: 'error', content: 'Chuyển bị nội dung phỏng vấn bên B' },
        { type: 'error', content: 'Chuyển bị nội dung phỏng vấn bên C' }
      ];
      break;
    default:
  }
  return listData || [];
};

const dateCellRender = value => {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
};

class Schedule extends React.Component {
  state = {
    value: moment(),
    selectedValue: moment(),
    data: [],
    visible: false
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
      data: getListData(value)
    });
    info(getListData(value), value);
  };

  onPanelChange = value => {
    this.setState({ value });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { value, selectedValue, data } = this.state;

    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 20
          }}
        >
          <Alert
            style={{ width: '50%' }}
            message={`Bạn đã chọn ngày: ${selectedValue &&
              selectedValue.format('DD-MM-YY')}`}
          />
          <Button icon="plus" type="primary">
            Thêm lịch làm việc
          </Button>
        </div>

        <Calendar
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
          dateCellRender={dateCellRender}
        />
      </div>
    );
  }
}
export default Schedule;
