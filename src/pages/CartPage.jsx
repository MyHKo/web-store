import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/CartPage.scss"
import Products from "../components/Products.jsx";
import {useDispatch, useSelector} from "react-redux";

export default function CartPage() {
    const { productsInCart } = useSelector((state) => state.globalStateSlice)

    return (
        <>
            <Header/>
            <div className="main-cart-container">
                  <Products productIdAndNameList={productsInCart} isInCart={true}/>
                  <div className="procceed-with-payment">
                    <h2>Continue Payment</h2>
                </div>
            </div>

            <Footer/>
        </>
    )
}