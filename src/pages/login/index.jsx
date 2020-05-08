import React from 'react';
import styles from './index.less';
import LoginForm from './components/LoginForm';
export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles['login-box']}>
        <div className={styles['login-title']}>
          {/* <img src={require('@/assets/login/icon/logo.png')} alt="" style={{ marginRight: 10 }} /> */}
          123
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
