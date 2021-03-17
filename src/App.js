import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Product from "./pages/products/products.js";
import ProductDetail from "./pages/products/product-detail/product-detail.js";
import ShoppingCart from "./pages/shopping-cart/shopping-cart.js";
import "./App.scss";

function App() {

  // TODO: https://reactrouter.com/web/example/no-match

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/detail/:type/:productType/:productID"
        component={ProductDetail}
      />
      <Route path="/product/:type/:productType" component={Product} />
      <Route path="/product/cart" component={ShoppingCart} />
    </Switch>
  );
}

export default App;
