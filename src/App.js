import React from 'react';

import { Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SideBar from './Components/Common/Menu/SideBar/SideBar';
import NavBarContainer from './Components/Common/Menu/NavBar/NavBarContainer';
import './App.css';
import DashBoard from './Components/Dashboard/DashBoard';
import Login from './Components/Common/Login/Login';
import CreatePost from './Components/Post/CreatePost/CreatePost';
import ListPost from './Components/Post/ListPost/ListPost';
import Schedule from './Components/Schedule/Schedule';
import CateEditor from './Components/Cate_Editor/CateEditor';


const { Content } = Layout;

class App extends React.PureComponent {

  render() {
    const { postsData } = this.props;
    const dataPending = postsData.filter((item) => item.status === 0).sort(function(a, b) {
      return b.id - a.id;
    });
    const dataAccepted = postsData.filter((item) => item.status === 1);
    const dataRejected = postsData.filter((item) => item.status === -1);
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login}/>
        <Route exact path="/admin-login" component={Login}/>
        <Route path="/admin/">
          <Layout style={{ height: '100vh' }}>
            <SideBar/>
            <Layout>
              <NavBarContainer/>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                  <Route path="/admin/view-pending-post">

                    <Breadcrumb.Item>Danh sách bài viết chờ duyệt</Breadcrumb.Item>
                  </Route>
                  <Route path="/admin/view-accepted-post">
                    <Breadcrumb.Item>Danh sách bài viết đã đăng</Breadcrumb.Item>

                  </Route>

                  <Route path="/admin/view-rejected-post">
                    <Breadcrumb.Item></Breadcrumb.Item>
                    <Breadcrumb.Item>Danh sách bài viết bị từ chối</Breadcrumb.Item>
                  </Route>

                  <Route path="/admin/view-schedule">

                    <Breadcrumb.Item>Lịch làm liệc</Breadcrumb.Item>
                  </Route>

                  <Route path="/admin/view-cate">

                    <Breadcrumb.Item>Danh sách chuyên mục phụ trách</Breadcrumb.Item>
                  </Route>
                  <Route path="/admin/create-post">

                    <Breadcrumb.Item>Tạo mới bài viết</Breadcrumb.Item>
                  </Route>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 'auto'
                  }}
                >
                  <Route exact path="/admin/" component={DashBoard}/>
                  <Route path="/admin/create-post" component={CreatePost}/>
                  <Route path="/admin/view-pending-post"><ListPost status={0} data={dataPending}
                                                                   tit={'Danh sách bài viết chờ duyệt'}/></Route>
                  <Route path="/admin/view-accepted-post"><ListPost status={1} data={dataAccepted}
                                                                    tit={'Danh sách bài viết được duyệt'}/></Route>
                  <Route path="/admin/view-rejected-post"><ListPost status={-1} data={dataRejected}
                                                                    tit={'Danh sách bài viết bị từ chối'}/></Route>
                  <Route path="/admin/view-schedule" component={Schedule}/>
                  <Route path="/admin/view-cate" component={CateEditor}/>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Route>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = state => {
  return {
    postsData: state.PostReducer.postsData
  };
};


export default connect(mapStateToProps, null)(App);
