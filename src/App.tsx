import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { useCounter } from './CounterContext';

const App: Component = () => {

  const [count, { increment, decrement }] = useCounter();
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <div>
          <div>{count()}</div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </header>
    </div>
  );
};

export default App;
