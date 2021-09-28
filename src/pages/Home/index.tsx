import { ErrorBoundary } from 'containers';
import { Banner, ResultsComponent } from './components';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <ErrorBoundary>
        <ResultsComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;