import Link from "next/link";
import Container from "../container";
import styles from "./style.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.header_inner}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              DEMO <span>Streaming</span>
            </a>
          </Link>
        </div>
        <div className={styles.action_button}>
          <a>Log in</a>
          <button>Start your free trial</button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
