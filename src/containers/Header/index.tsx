import React from 'react';
import styles from './styles.module.scss';
import { Button, Text } from 'components';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Text color="red" tag="span" weight="bold">netflix</Text>
        <Text color="red" tag="span">roulette</Text>
      </div>
      <Button className={styles.addBtn}>
        <Text weight="medium" color="red">+ ADD MOVIE</Text>
      </Button>
    </header>
  );
};

export default Header;
