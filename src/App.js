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
import Order from './Page/Basket/Order/Order';
import Collection from './Page/Collection/Collection';
import CollectionCatalog from './Page/CollectionCatalog/CollectionCatalog';
import { useSelector } from 'react-redux';
import Buyer from './Page/Buyer';
import Payment from './Page/Buyer/Payment/Payment';
import Delivery from './Page/Buyer/Payment/Delivery';
import Services from './Page/Buyer/Payment/Services';
import About from './Page/About/About';
import Contacts from './Page/Contacts/Contacts';

function App() {
  const [menu, setMenu] = useState([]);
  const basket = useSelector((state) => state.basket.basket);
  useEffect(() => {
    fetch('https://sadogroup.ru/api/menu/')
      .then((res) => res.json())
      .then((menu) => {
        fetch('https://sadogroup.ru/api/alldata/')
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
  useEffect(() => {
    const json = JSON.stringify(basket);
    localStorage.setItem('basket', json);
  }, [basket]);

  return (
    <div className="App">
      <Header menu={menu} />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sale" element={<Sale menu={menu} />} />
          <Route path="categories" element={<Categories />} />
          <Route path="product" element={<Product />} />
          <Route path="catalog" element={<Catalog menu={menu} />} />
          <Route path="basket" element={<Basket />} />
          <Route path="basket/order" element={<Order />} />
          <Route path="collection" element={<Collection />} />
          <Route path="collcatalog" element={<CollectionCatalog />} />
          <Route path="buyer" element={<Buyer />} />
          <Route path="buyer/payment" element={<Payment />} />
          <Route path="buyer/delivery" element={<Delivery />} />
          <Route path="buyer/services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
