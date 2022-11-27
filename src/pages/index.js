import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link 
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link 
            className="hide button--secondary button--lg"
            to="/docs/intro">
            G
          </Link>
          <Link 
            className="button button--secondary button--lg"
            href="https://discord.com/api/oauth2/authorize?client_id=1025629384629043262&permissions=8&scope=bot%20applications.commands">
            Invite Bot
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link 
            className="hide button--secondary button--lg"
            href="https://patreon.com/user?u=29087814">
            G
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link 
            className="button button--secondary button--lg"
            href="https://patreon.com/user?u=29087814">
            Patreon
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Documentation of Omega the Best Femdom Discord Bot.<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
