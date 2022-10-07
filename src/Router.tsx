import { Routes, Route } from "react-router-dom";
import { DefaultHeaderLayout } from "./layouts/DefaultHeaderLayout";

import { Checkout } from "./pages/Checkout/Index";
import { Home } from "./pages/Home/Index";
import { Sucess } from "./pages/Sucess/Index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultHeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  );
}
