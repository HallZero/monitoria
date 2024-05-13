import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Todo o conteúdo é organizado de forma intuitiva e fácil de acessar.
      </>
    ),
  },
  {
    title: 'Foque no conteúdo',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A estrutura do site está organizada por tópicos, permitindo que você se
        concentre no conteúdo.
      </>
    ),
  },
  {
    title: 'Ferramenta de documentação',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        O docusaurus é uma ferramenta de documentação moderna e fácil de usar.
        Quem sabe vocês não utilizam para documentar seus projetos nos próximos módulos?
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
        <Heading as="h3">{title}</Heading>
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
