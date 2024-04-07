import { Route, Routes } from "react-router-dom";

import Layouts from './Layouts/Layouts';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';

import { ROUTES } from './routes';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path={ ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.PRODUCT} element={<Product />}/>
        </Route>
      </Routes>
    </div>
  );
}
