import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/product-details";
import HomePage from "./pages/product-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
