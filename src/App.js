import { BrowserRouter , Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/products" element={<ProductsPage />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;