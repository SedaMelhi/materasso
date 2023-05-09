import './assets/sass/app.sass';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './Header';
import Home from './Page/Home/Home';
import Footer from './Footer/Footer';
import Sale from './Page/Sale';
import Categories from './Page/Categories/Categories';
import Product from './Page/Product/Product';
import Catalog from './Page/Catalog/Catalog';
import Basket from './Page/Basket';

function App() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('http://storefurniture.pythonanywhere.com/api/menu/')
      .then((res) => res.json())
      .then((menu) => {
        fetch('http://storefurniture.pythonanywhere.com/api/alldata/')
          .then((res) => res.json())
          .then((categories) => {
            menu.map((item) => (item.products = []));
            categories.forEach(({ id, menu_item, name_category, subcategories }) =>
              menu.map((item) =>
                item.id === menu_item.id
                  ? item.products.push({
                      id: id,
                      name_category: name_category,
                      subcategories: subcategories,
                    })
                  : false,
              ),
            );
            setMenu(menu);
          });
      });
  }, []);
  return (
    <div className="App">
      <Header menu={menu} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sale" element={<Sale menu={menu} />} />
          <Route path="categories" element={<Categories />} />
          <Route path="product" element={<Product />} />
          <Route path="catalog" element={<Catalog menu={menu} />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
