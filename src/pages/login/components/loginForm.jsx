/*
 * @Author: levi
 * @Date: 2019-10-22 10:43:38
 * @Last Modified by: gww
 * @Last Modified time: 2020-05-08 11:18:46
 * @des: 登录页信息输入表格
 */

import styles from './loginForm.less';
import { Form, Input, Icon, Button } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';

function LoginForm(props) {
  // antd form 双向绑定方法
  const { getFieldDecorator } = props.form;
  /**
   * 提交登录表单事件
   * @param {event object} e 事件对象
   */
  const handleSubmit = async e => {
    e.preventDefault();
    // 验证表单内容
    await props.form.validateFields(async (err, params) => {
      if (!err) {
        // 发起登录请求
        await props.dispatch({
          type: 'login/login',
          params,
        });
        router.push('/home');
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} className={styles['login-form']}>
      <Form.Item>
        {getFieldDecorator('loginName', {
          rules: [{ required: true, message: '请输入您的账号!' }],
        })(
          <Input
            size="large"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入用户账号"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入您的密码!' }],
        })(
          <Input
            size="large"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="请输入用户密码"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button size="large" type="primary" htmlType="submit" className={styles['login-btn']}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}
function mapStateToProps({ dispatch }) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps)(Form.create({ name: 'normal_login' })(LoginForm));
