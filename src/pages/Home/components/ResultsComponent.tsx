import styles from './styles.module.scss';
import { Select, TabLookingComponent, Text } from 'components';
import { data } from './mockData';
import MovieCard from './MovieCard';

const tabs = [
  {
    title: 'ALL',
  },
  {
    title: 'DOCUMENTARY',
  },
  {
    title: 'COMEDY',
  },
  {
    title: 'HORROR',
  },
  {
    title: 'CRIME',
  },
];

const selectOptions = [
  {
    label: 'Release Data',
    value: 'releaseDate'
  },
  {
    label: 'Rating',
    value: 'rating'
  },
  {
    label: 'Most viewed',
    value: 'mostViewed'
  },
];


const ResultsComponent = () => {
  return (
    <div className={styles.results}>
      <div className={styles.resultsFilters}>
        <TabLookingComponent className={styles.tabs} tabs={tabs} action={alert} />
        <div>
          <Select label="Sort By" options={selectOptions} />
        </div>
      </div>
      <Text color="white">30 movies found</Text>
      <div className={styles.resultsContainer}>
          {data.map((movie) => {
            const { image, genre, releaseDate, name } = movie;
            return (
              <MovieCard image={image} genre={genre} releaseDate={releaseDate} name={name} />
            )
          })}
        </div>
    </div>
  );
};

export default ResultsComponent;
