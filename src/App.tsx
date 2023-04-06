import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/product-details";
import HomePage from "./pages/product-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-gh-pages" element={<HomePage />} />
        <Route path="react-gh-pages/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
