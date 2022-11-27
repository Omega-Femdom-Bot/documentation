import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BDSM',
    Svg: require('@site/static/img/BDSM_logo.svg').default,
    description: (
      <>
      A bot focused on BDSM-Dynamics. It helps superior females keep their submissives in their place, play with them at their leisure, and show submissives that females have full control over them.
      </>
    ),
  },
  {
    title: 'Who am I?',
    Svg: require('@site/static/img/Silhouetted_Domme.svg').default,
    description: (
      <>
      I am Omega. I am there to help you to discipline your submissives and put them into the place where they belong. You can always call upon me and I will gladly help you to show your submissives the strictness, or on the rare occasion, the mercifulness you decide to show your property.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/sadomaso-clipart-14.svg').default,
    description: (
      <>
      Omega has very clear commands. It delivers clear descriptions for what can be done with your submissives for an effortless experience, even for beginners.
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
