import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './CreatePost.css';
import moment from 'moment';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Select,
  Tag,
  Tooltip,
  Icon,
  Tabs,
  Upload,
  message,
  Modal
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Editor } from '@tinymce/tinymce-react';

const { TabPane } = Tabs;
const { Title, Text } = Typography;
const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
class CreatePost extends Component {
  state = {
    tags: ['Bóng đá', 'U22 Việt Nam', 'Sea Games 30'],
    inputVisible: false,
    inputValue: '',
    loading: false,
    previewVisible: false,
    previewImage: ''
  };
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ''
    });
  };

  saveInputRef = input => (this.input = input);
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    const options = [
      { label: 'Đời sống', value: '1' },
      { label: 'Xã hội', value: '2' },
      { label: 'Thời sự trong nước', value: '3' },
      { label: 'Thời sự quốc tế', value: '4' },
      { label: 'Thể thao Việt Nam ', value: '5' },
      { label: 'Thể thao quốc tế', value: '6' },
      { label: 'Xe cộ', value: '7' },
      { label: 'Kinh tế', value: '8' },
      { label: 'Nhà đất', value: '9' },
      { label: 'Trao đổi', value: '10' }
    ];
    const optionsMostUsed = [
      { label: 'Đời sống', value: '1' },
      { label: 'Xã hội', value: '2' },
      { label: 'Thời sự trong nước', value: '3' },
      { label: 'Thời sự quốc tế', value: '4' },
      { label: 'Thể thao Việt Nam ', value: '5' },
      { label: 'Thể thao quốc tế', value: '6' }
    ];
    const { tags, inputVisible, inputValue } = this.state;

    return (
      <div>
        <Typography>
          <Title level={3}>Tạo mới bài viết</Title>
          <Row gutter={15}>
            <Col span={18}>
              <div
                style={{
                  width: '100%',
                  boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px',
                  padding: '15px'
                }}
              >
                <Form layout="vertical">
                  <Form.Item label="Tiêu đề bài viết">
                    <Input placeholder="Nhập tiêu đề bài viết" />
                  </Form.Item>
                  <Form.Item label="Mô tả tóm tắt">
                    <TextArea
                      cols={2}
                      placeholder="Nhập mô tả ngắn gọn của bài viết"
                    />
                  </Form.Item>
                  <Form.Item label="Nội dung chi tiết bài viết">
                    <Editor
                      apiKey="4ygopbc0vmsilfm5qd4e6of2xua3wecqd3uh7nvl9ewxj6rl"
                      init={{
                        height: 600,
                        menubar: true,
                        plugins: [
                          'advlist autolink lists link image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount tinydrive image imagetools'
                        ],
                        toolbar:
                          'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | image | removeformat | help',
                        imagetools_toolbar:
                          'rotateleft rotateright | flipv fliph | editimage imageoptions'
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label={
                      <span>
                        Tiêu đề SEO
                        <span
                          style={{
                            color: 'red',
                            textAlign: 'center'
                          }}
                        >
                          &ensp;( Bắt buộc )
                        </span>
                      </span>
                    }
                  >
                    <Input placeholder="Nhập tiêu đề SEO" />
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col span={6}>
              <div
                style={{
                  width: '100%',
                  marginBottom: 20,
                  boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px',
                  padding: '15px 15px 1px 15px'
                }}
              >
                <Form layout="vertical">
                  <Form.Item label="Tạo bài viết">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Button>Lưu bài viết</Button>
                      <Button>Xem trước</Button>
                    </div>
                    <div style={{ marginTop: 15 }}>
                      <Icon type="user" style={{ marginRight: 5 }} />
                      Tác giả bài viết: <Text strong>Vũ Bùi</Text>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Icon type="clock-circle" style={{ marginRight: 5 }} />
                      Thời gian tạo:{' '}
                      <Text strong>
                        {moment().format('L')} - {moment().format('LT')}
                      </Text>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Icon type="eye" style={{ marginRight: 5 }} />
                      Trạng thái đăng tải: <Text strong>Chờ duyệt</Text>
                    </div>
                    <div style={{ marginTop: 15 }}>
                      <Button type="primary">Gửi bài viết</Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
              <div
                style={{
                  width: '100%',
                  marginBottom: 20,
                  boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px',
                  padding: '15px 15px 5px 15px'
                }}
              >
                <Form layout="vertical">
                  <Form.Item label="Hình đại diện bài viết">
                    <Upload
                      style={{ marginTop: 10, width: '100%' }}
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChange}
                      onPreview={this.handlePreview}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{ width: '100%' }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Form.Item>
                </Form>
              </div>
              <div
                style={{
                  width: '100%',
                  boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px',
                  padding: '15px'
                }}
              >
                <Form layout="vertical">
                  <Form.Item label="Chuyên mục">
                    <Tabs defaultActiveKey="1">
                      <TabPane tab="Tất cả" key="1">
                        <Checkbox.Group defaultValue={['Apple']}>
                          <Row gutter={[10, 5]}>
                            {options.map(item => (
                              <Col span={24}>
                                <Checkbox value={item.value}>
                                  {item.label}
                                </Checkbox>
                              </Col>
                            ))}
                          </Row>
                        </Checkbox.Group>
                      </TabPane>
                      <TabPane tab="Hay sử dụng" key="2">
                        <Checkbox.Group defaultValue={['Apple']}>
                          <Row gutter={[10, 5]}>
                            {optionsMostUsed.map(item => (
                              <Col span={24}>
                                <Checkbox value={item.value}>
                                  {item.label}
                                </Checkbox>
                              </Col>
                            ))}
                          </Row>
                        </Checkbox.Group>
                      </TabPane>
                    </Tabs>
                  </Form.Item>
                  <Form.Item label="Từ khóa - Nhãn Tag">
                    <div>
                      {tags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                          <Tag
                            style={{ fontSize: 14, marginBottom: 10 }}
                            key={tag}
                            closable={index !== 0}
                            onClose={() => this.handleClose(tag)}
                          >
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                          </Tag>
                        );
                        return isLongTag ? (
                          <Tooltip title={tag} key={tag}>
                            {tagElem}
                          </Tooltip>
                        ) : (
                          tagElem
                        );
                      })}
                      {inputVisible && (
                        <Input
                          ref={this.saveInputRef}
                          type="text"
                          size="small"
                          style={{ width: 78 }}
                          value={inputValue}
                          onChange={this.handleInputChange}
                          onBlur={this.handleInputConfirm}
                          onPressEnter={this.handleInputConfirm}
                        />
                      )}
                      {!inputVisible && (
                        <Tag
                          onClick={this.showInput}
                          style={{
                            color: 'blue',
                            borderStyle: 'dashed',
                            fontSize: 14
                          }}
                        >
                          <Icon type="plus" /> Thêm Tag
                        </Tag>
                      )}
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </Typography>
      </div>
    );
  }
}
export default CreatePost;
