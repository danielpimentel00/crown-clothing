import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Auth from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
