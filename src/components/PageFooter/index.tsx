import styles from "./styles.module.css";

export default function PageFooter(): JSX.Element {
  return (
    <div className={styles.container}>
      <footer className="footer">
        <div className="container container--fluid">
          <div>
            @<a href="https://docusaurus.io/">lunarifish</a>{" "}
            <span className="footer__link-separator">&middot;</span> Built with{" "}
            <a href="https://docusaurus.io/">Docusaurus</a>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
}
