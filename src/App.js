import './assets/sass/app.sass';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Page/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
