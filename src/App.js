import './assets/sass/app.sass';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Page/Home/Home';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
