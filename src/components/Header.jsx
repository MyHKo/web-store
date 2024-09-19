import "../styles/Header.scss"
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"
import {NavLink, useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    function goToCart(){
        navigate("/cart");
    }

    function goToHome(){
        navigate("/");
    }

    return (
        <header>
            <div className="headerContainer">
                <img className="logoImage" src={logo} alt="logo" onClick={goToHome}/>
                <form>
                    <input className="searcher" type="text" placeholder="Search"/>
                </form>
                <h2><NavLink className="homeButton" to="/">Home</NavLink></h2>
                <h2><NavLink className="catalogButton" to="/catalog">Catalog</NavLink></h2>
                <img className="cartImage" src={cart} alt="cart" onClick={goToCart}/>
            </div>
        </header>
    )
}