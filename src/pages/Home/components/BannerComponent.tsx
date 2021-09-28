import styles from './styles.module.scss';
import { Button, Text, Input } from 'components';


const Banner = () => {
  return (
    <div className={styles.banner}>
      <Text size="xxxl" color="white">FIND YOUR MOVIE</Text>
      <div className={styles.search}> 
        <Input
          placeholder="What do you want to watch?"
        />
        <Button color="red">
          <Text size="l" weight="medium" color="white">Search</Text>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
