import React, { Component } from 'react';
import './DashBoard.css';
import 'antd/dist/antd.css';
import { Bar } from 'ant-design-pro/lib/Charts';

import { Redirect } from 'react-router-dom';
import {
  Input,
  Select,
  Table,
  Typography,
  Row,
  Col,
  Icon,
  Tooltip
} from 'antd';
import {
  ChartCard,
  Field,
  MiniArea,
  MiniBar,
  MiniProgress,
  yuan
} from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import numeral from 'numeral';
import moment from 'moment';
import { connect } from 'react-redux';
import TopDashBoard from './TopDashBoard/TopDashBoard';
import MiddleDashBoard from './MiddleDashBoard/MiddleDashBoard';

const { Title, Text } = Typography;
const { Option } = Select;
const { Search } = Input;

class DashBoard extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    allContracts: [],
    contractsByStatus: []
  };

  render() {
    return (
      <div style={{ padding: '10px 20px' }}>
        <Row>
          <TopDashBoard />
        </Row>
        <Row>
          <MiddleDashBoard />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.LoginReducer.isLogin,
  username: state.LoginReducer.username
});
export default connect(mapStateToProps, null)(DashBoard);
