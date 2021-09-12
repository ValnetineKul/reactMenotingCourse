import { CSSProperties, PureComponent } from 'react';
import cx from 'classnames';

type Props = {
  className?: string,
  icon: any,
  style?: CSSProperties,
  color?: string,
};

class Icon extends PureComponent<Props> {
  render() {
    return (
      <i className={cx(`icon-${this.props.icon}`, this.props.className)} style={this.props.style} />
    )
  }
}

export default Icon;
