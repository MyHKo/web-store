import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard.jsx";
import "../styles/CartPage.scss"
import Products from "../components/Products.jsx";

export default function CartPage() {

    return (
        <>
            <Header/>
            <div className="main-cart-container">
                <Products/>
                <div className="procceed-with-payment">
                    <h2>Continue Payment</h2>
                </div>
            </div>

            <Footer/>
        </>
    )
}