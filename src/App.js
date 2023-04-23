import './assets/sass/app.sass';

import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Page/Home/Home';
import Footer from './Footer/Footer';
import Sale from './Page/Sale';
import Catalog from './Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sale" element={<Sale />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
