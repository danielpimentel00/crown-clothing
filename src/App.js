import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

// import Auth from "./routes/authentication/authentication.component";
// import Shop from "./routes/shop/shop.component";
// import Navigation from "./routes/navigation/navigation.component";
// import Checkout from "./routes/checkout/checkout.component";
// import Home from "./routes/home/home.component";
import Spinner from "./components/spinner/spinner.component";
import { checkUserSession } from "./store/user/user.action";

import { GlobalStyle } from "./global.styles";

const Home = lazy(() => import("./routes/home/home.component"));
const Auth = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
