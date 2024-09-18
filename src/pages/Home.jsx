import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Filters from "../components/Filters";
import "../styles/Home.scss"

export default function Home() {
    return (
        <>
            <Header />
            <div className="mainContainer">
                <Filters />
                <Products />
            </div>
            <Footer />
        </>
    )
}