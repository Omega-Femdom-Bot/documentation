import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BDSM',
    Svg: require('@site/static/img/BDSM_logo.svg').default,
    description: (
      <>
        Focused on BDSM-Dynamics. It is there to help superior females to keep submissives in place, play with them and show them that they have full control about them.
      </>
    ),
  },
  {
    title: 'Who am I?',
    Svg: require('@site/static/img/Silhouetted_Domme.svg').default,
    description: (
      <>
        I am Omega. I am there to help you to discipline your submissives and put them into the place where they belong. You can always adress me and I will gladly help you to show your submissives the strictness just the same as the mercifulness you decide to have upon your property.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/sadomaso-clipart-14.svg').default,
    description: (
      <>
        Has very clear commands. Omega gives clear descriptions with what can be done with submissives and is not complicated, even for beginners.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
