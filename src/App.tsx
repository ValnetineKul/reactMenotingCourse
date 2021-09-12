import React, { useCallback, useState } from 'react';
import { Text, Input, Button } from './components';
import { Counter } from 'containers';
import styles from './styles.module.scss';

function App() {

  const [inputState, setInputState] = useState('');

  const handleInputChange = useCallback((e) => {
    setInputState(e.target.value);
  }, [inputState])

  const handleSearch = useCallback(() => {
    alert(inputState);
  }, [inputState])
  return (
    <div className="App">
      <Text size="xxxl" align="center">Hello World</Text>
      <Counter />
      <div className={styles.searchBlock}>
        <Input
          value={inputState}
          onChange={handleInputChange}
          placeholder="What do you want to watch?"
          className={styles.input}
        />
        <Button onClick={handleSearch} color="red">
          <Text weight="bold" color="white">SEARCH</Text>
        </Button>
      </div>
    </div>
  );
}

export default App;
