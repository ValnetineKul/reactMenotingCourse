import { Text } from 'components';
import { FC, PropsWithChildren } from 'react';

type Props = {
}

const ErrorBoundary: FC<PropsWithChildren<Props>> = ({ children }) => {
  try {
    return (
      <div>
        {children}
      </div>
    )
  } catch {
    return (
      <Text>Something went wrong</Text>
    )
  }
  
};

export default ErrorBoundary;
