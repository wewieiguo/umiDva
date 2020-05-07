import styles from './index.css';
import Header from './component/header';
function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default BasicLayout;
