import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Homepage from "./Homepage.jsx";
import Menupage from "./Menupage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/Slice.js";
import CategoryPage from "./CategoryPage.jsx";
import CheckoutPage from "./CheckoutPage.jsx";
import Aboutpage from "./Aboutpage.jsx";
import Login from "./Login.jsx";
import ServicePage from "./ServicePage.jsx";
import BlogPage from "./BlogPage.jsx";
import ContactPage from "./ContactPage.jsx";

import Users from "./Users.jsx";
import Register from "./Register.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/Menu" element={<Menupage />} />
          <Route path="/Category" element={<CategoryPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
          <Route path="/About" element={<Aboutpage/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Services" element={<ServicePage/>} />
          <Route path="/Blogs" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
