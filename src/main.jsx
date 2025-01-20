import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./Homepage.jsx";
import Menupage from "./Menupage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Store.js";
import CategoryPage from "./CategoryPage.jsx";
import CheckoutPage from "./CheckoutPage.jsx";
import Aboutpage from "./Aboutpage.jsx";
import Login from "./Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
