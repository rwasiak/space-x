import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import styles from './Homepage.module.scss';

export function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <Link className={styles.appLink} to="/latest-flight">
            Latest flight
          </Link>
        </p>
      </header>
    </div>
  );
}
