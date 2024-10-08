import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/CartPage.scss"
import Products from "../../components/Products.jsx";
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