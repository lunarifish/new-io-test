import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import PageFooter from "@site/src/components/PageFooter";
import PortalButton from "@site/src/components/PortalButton";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.main}>
      <Layout title={`${siteConfig.title}`}>
        <div className={styles.container}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="col-demo">
                  {" "}
                  <div className="card-demo">
                    <div className="card shadow--md">
                      <div className="card__image">
                        <img
                          src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                          alt="Image alt text"
                          title="Logo Title Text 1"
                        />
                      </div>
                      <div className="card__body">
                        <h4>
                          @<a href="https://docusaurus.io/">lunarifish</a>
                        </h4>
                        <small>
                          <span className="footer__link-separator">
                            &middot;
                          </span>{" "}
                          ABC
                          <br />
                          <span className="footer__link-separator">
                            &middot;
                          </span>{" "}
                          ABC
                          <br />
                          <span className="footer__link-separator">
                            &middot;
                          </span>{" "}
                          ABC
                          <br />
                          <span className="footer__link-separator">
                            &middot;
                          </span>{" "}
                          ABC
                          <br />
                          <span className="footer__link-separator">
                            &middot;
                          </span>{" "}
                          ABC
                          <br />
                          <span className="footer__link-separator">
                            &middot;
                          </span>{" "}
                          ABC
                          <br />
                        </small>
                      </div>
                      <div className="card__footer"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col-demo">
                  <h1>LINKS </h1>
                  <br />
                  <br />
                  <div className={styles.buttons_container}>
                    <PortalButton
                      title="GitHub"
                      destination="https://bing.com"
                      imageUrl="https://via.placeholder.com/150"
                    ></PortalButton>
                    <PortalButton
                      title="GitHub"
                      destination="https://bing.com"
                      imageUrl="https://via.placeholder.com/150"
                    ></PortalButton>
                    <PortalButton
                      title="GitHub"
                      destination="https://bing.com"
                      imageUrl="https://via.placeholder.com/150"
                    ></PortalButton>
                    <PortalButton
                      title="GitHub"
                      destination="https://bing.com"
                      imageUrl="https://via.placeholder.com/150"
                    ></PortalButton>
                    <PortalButton
                      title="GitHub"
                      destination="https://bing.com"
                      imageUrl="https://via.placeholder.com/150"
                    ></PortalButton>
                    <PortalButton
                      title="GitHub"
                      destination="https://bing.com"
                      imageUrl="https://via.placeholder.com/150"
                    ></PortalButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <PageFooter />
    </div>
  );
}
