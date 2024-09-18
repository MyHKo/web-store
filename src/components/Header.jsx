import "../styles/Header.scss"
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="headerContainer">
                <img className="logoImage" src={logo} alt="logo"/>
                <form>
                    <input className="searcher" type="text" placeholder="Search"/>
                </form>
                <h2><NavLink className="homeButton" to="/">Home</NavLink></h2>
                <h2><NavLink className="catalogButton" to="/catalog">Catalog</NavLink></h2>
                <img className="cartImage" src={cart} alt="cart"/>
            </div>
        </header>
    )
}