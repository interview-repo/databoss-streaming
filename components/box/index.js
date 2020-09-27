import styles from "./style.module.css";

function Box({ image, title }) {
  return (
    <div title={title}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.title}>
        {title.substring(0, 27)}
        {title.length > 27 && "..."}
      </div>
    </div>
  );
}

export default Box;
