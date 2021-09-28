import styles from './styles.module.scss';
import { Text } from 'components';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FC } from 'react';

type Props = {
  className?: string,
}

const Header: FC<Props> = ({ className }) => {
  return (
    <footer className={cx(styles.footer, className)}>
      <div>
        <Text color="red" tag="span" weight="bold">netflix</Text>
        <Text color="red" tag="span">roulette</Text>
      </div>
    </footer>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
