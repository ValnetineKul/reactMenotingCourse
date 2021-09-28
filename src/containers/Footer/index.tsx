import styles from './styles.module.scss';
import { Text } from 'components';

const Header = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Text color="red" tag="span" weight="bold">netflix</Text>
        <Text color="red" tag="span">roulette</Text>
      </div>
    </footer>
  );
};

export default Header;
