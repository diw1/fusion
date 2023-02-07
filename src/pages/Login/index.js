import { PageContainer } from '@ant-design/pro-components';
import { connect, Link } from 'umi';
import styles from './index.less';
import { Button, Form, Input, Row } from 'antd';
import Logo from '@/assets/images/logo.svg';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Component } from 'react';

@connect(({ global, loading }) => ({
  loading: loading.models.list,
}))
export default class Login extends Component {
  render() {
    const handleOk = (values) => {
      this.props.dispatch({ type: 'login/login', payload: values });
    };

    return (
      <PageContainer ghost>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img alt="logo" src={Logo} />
            <span>{name}</span>
          </div>
          <Form onFinish={handleOk}>
            <Form.Item name="username" rules={[{ required: true }]} hasFeedback>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]} hasFeedback>
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Item>

            <Row>
              <Link to="/dashboard">
                {' '}
                <Button type="primary" htmlType="submit">
                  Sign in
                </Button>
              </Link>
            </Row>
          </Form>
        </div>
      </PageContainer>
    );
  }
}
