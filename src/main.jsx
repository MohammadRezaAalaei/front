import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
} from "./components";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Navigation />
    <Routes>
      <Route path="/front" element={<Home />} />
      <Route path="/front/about" element={<About />} />
      <Route path="/front/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  </React.StrictMode>,
)
