import styles from "./styles.module.css";

export default function PortalButton(props: {
  title: string;
  destination: string;
  imageUrl: string;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://cdn.bootcdn.net/ajax/libs/bootstrap-icons/1.11.0/font/bootstrap-icons.css"
      ></link>
      <a
        className="button button--block button--secondary"
        href={props.destination}
      >
        <i className="bi bi-github"></i>&nbsp;
        {props.title}
      </a>
    </div>
  );
}
