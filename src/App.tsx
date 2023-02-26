import type { Component } from 'solid-js';
import { Route, Router, Routes } from '@solidjs/router';

const App: Component = () => {
  return (
    <div>
      <header>SOLID ROUTING</header>
      <main>
        <Router>
          <Routes>
            <Route path='/' component={() => <h1>Home</h1>} />
            <Route path='/pagea' component={() => <h1>PageA</h1>} />
            <Route path='/pageb' component={() => <h1>PageB</h1>} />
            <Route path='/pagec' component={() => <h1>PageC</h1>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
