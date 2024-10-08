import "@components/Header/Header.scss"
import logo from "@components/Header/assests/logo.svg"
import cart from "@components/Header/assests/cart.svg"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setSearchString, setFilteredProductList} from "@redux/slice.js"
import {getProducts} from "@redux/thunk.js";

export default function Header({ isInCart, canSearch }) {
    const navigate = useNavigate();
    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const { searchString, productsInCart, productIdAndNameList } = useSelector((state) => state.globalStateSlice);
    const dispatch = useDispatch();

    function handleInputChange(event) {
        dispatch(setSearchString(event.target.value));
    }

    function goToCart(){
        if(productsInCart.length > 0){
            navigate("/cart");
        }
        else {
            setIsBannerVisible(true);
        }
    }

    function goToHome(){
        navigate("/");
    }

    function filterProducts(searchPattern){
        const filteredProductsArray = productIdAndNameList.filter((item) => {
            return item[1].toLowerCase().includes(searchPattern.toLowerCase().trim());
        })
        dispatch(setFilteredProductList(filteredProductsArray));
    }

    useEffect(() => {
        const searchProducts = setTimeout(() => {
            if(searchString === "")
                dispatch(getProducts());
            else
                filterProducts(searchString);
        }, 200)

        return () => clearTimeout(searchProducts);
    }, [searchString]);

    return (
        <header>
            <div className="headerContainer">
                <img className="logoImage" src={logo} alt="logo" onClick={goToHome}/>
                <form>
                    <input className="searcher" disabled={!canSearch} type="text" placeholder="Search" onChange={(event)=>{handleInputChange(event)}} value={searchString}/>
                </form>
                <h2><NavLink className="homeButton" to="/">Home</NavLink></h2>
                <h2><NavLink className="catalogButton" to="/catalog">Catalog</NavLink></h2>
                <img className="cartImage" src={cart} alt="cart" onClick={goToCart}/>
                {isBannerVisible && !isInCart && <div className="bannerContainer" onClick={() => {setIsBannerVisible(false)}}>
                    <div className="bannerBackground"></div>
                    <div className="cartIsEmptyBanner">The cart is empty
                        <h4 className="closeBanner" onClick={() => {setIsBannerVisible(false)}}>Close</h4>
                    </div>
                </div>}
            </div>
        </header>
    )
}