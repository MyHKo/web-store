import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import ProductPage from './pages/ProductPage.jsx'
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:id" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
