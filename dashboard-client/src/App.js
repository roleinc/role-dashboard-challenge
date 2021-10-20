import './global.css';
import styles from './App.module.css';

import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <header className={styles.header}>
        <div className={styles.logo} />
        <h1 className={styles.heading}>Role Dashboard Coding Challenge</h1>
      </header>
      <article>
        <DashboardPage />
      </article>
    </div>
  );
}

export default App;
