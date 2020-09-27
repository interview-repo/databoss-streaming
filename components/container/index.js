import cn from "classnames";

import styles from "./style.module.css";

function Container({ className, children }) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}

export default Container;
