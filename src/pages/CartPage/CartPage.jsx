import Header from "@components/Header/Header.jsx";
import Footer from "@components/Footer/Footer.jsx";
import Products from "@components/Products/Products.jsx";
import "@cartPage/styles/CartPage.scss"
import {useDispatch, useSelector} from "react-redux";

export default function CartPage() {
    const { productsInCart } = useSelector((state) => state.globalStateSlice)
    console.log(productsInCart)

    return (
        <>
            <Header isInCart={true} canSearch={false }/>
            <div className="mainCartContainer">
                {productsInCart.length === 0 ? <h2 className="cartIsEmptyMessage">Your cart is empty</h2> : <Products productIdAndNameList={productsInCart} isInCart={true}/>}
                {productsInCart.length === 0 ? null : <div className="procceedWithPayment">
                       <h2>Continue Payment</h2>
                  </div>}
            </div>
             <Footer/>
        </>
    )
}