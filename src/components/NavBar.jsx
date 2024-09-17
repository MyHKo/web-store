import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <form>
                <input type="text"/>
            </form>
            <h2><NavLink to="/">Home</NavLink></h2>
            <h2><NavLink to="/catalog">Catalog</NavLink></h2>
        </div>
    )
}