import Container from "../container";

import styles from "./style.module.css";

function BreadCrumb({ title }) {
  return (
    <div className={styles.breadcrumb}>
      <Container className={styles.breadcrumb_inner}>
        <a>{title}</a>
      </Container>
    </div>
  );
}

export default BreadCrumb;
