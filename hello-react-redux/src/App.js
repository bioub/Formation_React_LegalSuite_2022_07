import Todos from './todos/components/Todos';
import Theorie from './theorie/Theorie';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Theorie</Link>
          <Link to="/todos">Todos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Theorie />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
