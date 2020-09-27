import Container from "../container";

import styles from "./style.module.css";

function Footer() {
  const imageHover = (data, type) => {
    const hover = data.target.getAttribute("data-hover-src");
    const image = data.target.getAttribute("data-image-src");

    data.target.setAttribute("src", type ? hover : image);
  };

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.nav}>
          <nav>
            <a>Home</a>
            <a>Terms and Conditions</a>
            <a>Privacy Policy</a>
            <a>Collection Statement</a>
            <a>Help</a>
            <a>Manage Account</a>
          </nav>
          <span>
            Copyright ® 2020 DEMO{" "}
            <span style={{ color: "#828282" }}>Streaming</span>. All Rights
            Reserved.
          </span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.social}>
            <ul>
              <li>
                <a>
                  <img
                    onMouseOver={(e) => imageHover(e, 1)}
                    onMouseOut={(e) => imageHover(e, 0)}
                    src="/assets/social/facebook-white.svg"
                    data-image-src="/assets/social/facebook-white.svg"
                    data-hover-src="/assets/social/facebook-blue.svg"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    onMouseOver={(e) => imageHover(e, 1)}
                    onMouseOut={(e) => imageHover(e, 0)}
                    src="/assets/social/instagram-white.svg"
                    data-image-src="/assets/social/instagram-white.svg"
                    data-hover-src="/assets/social/instagram-blue.svg"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    onMouseOver={(e) => imageHover(e, 1)}
                    onMouseOut={(e) => imageHover(e, 0)}
                    src="/assets/social/twitter-white.svg"
                    data-image-src="/assets/social/twitter-white.svg"
                    data-hover-src="/assets/social/twitter-blue.svg"
                    alt="Facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.store}>
            <ul>
              <li>
                <a>
                  <img src="/assets/store/app-store.svg" alt="App Store" />
                </a>
              </li>
              <li>
                <a>
                  <img src="/assets/store/play-store.svg" alt="Play Store" />
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="/assets/store/windows-store.svg"
                    alt="Windows Store"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
