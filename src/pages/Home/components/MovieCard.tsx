import { FC } from 'react';
import cx from 'classnames';
import { Text } from 'components';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  image: string;
  name: string;
  genre: string;
  releaseDate: number | string;
};

const MovieCard: FC<Props> = ({
  className,
  image,
  name,
  genre,
  releaseDate,
}) => (
  <div className={cx(styles.movieCard, className)}>
    <div className={styles.imageWrapper}>
      <img className={styles.mainImage} src={image} alt="" />
    </div>
    <div className={styles.movieCardInfo}>
      <div className={styles.flexContainer}>
        <Text color="white" size="m">{name}</Text>
        <Text color="white" size="m">{releaseDate}</Text>
      </div>
      <Text color="white" size="xl">{genre}</Text>
    </div>
  </div>
);

export default MovieCard;
