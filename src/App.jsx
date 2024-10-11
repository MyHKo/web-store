import HomePage from '@homePage/HomePage.jsx'
import CatalogPage from '@catalogPage/CatalogPage.jsx'
import ProductPage from '@productPage/ProductPage.jsx'
import CartPage from '@cartPage/CartPage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
