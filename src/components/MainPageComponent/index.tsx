import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

export default function MainPageComponent(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.container}>
      <div className={styles.div1}>aa</div>
      <div className={styles.div2}>ss</div>
      {/* <div className={styles.diagonal_line}></div> */}
    </div>
  );
}
