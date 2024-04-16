import './Info.css';
import styles from './Info.module.css';

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello fom Info</h1>
      <button className="my-button">Click from Info</button>
      <button className={styles.myButton}>Click local CSS</button>
    </div>
  );
}

export default Info;
