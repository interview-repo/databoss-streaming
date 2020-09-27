import Container from "../container";
import HomePageBox from "../home-page-box";

import styles from "./style.module.css";
import stylesBox from "../home-page-box/style.module.css";

function HomePage({ data }) {
  return (
    <Container className={styles.home_page}>
      <ul className={stylesBox.box}>
        {data.map((category, index) => {
          return <HomePageBox key={index} name={category} />;
        })}
      </ul>
    </Container>
  );
}

export default HomePage;
