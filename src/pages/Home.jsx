import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import "../styles/Home.scss"

export default function Home() {
    return (
        <>
            <Header />
            <div className="mainContainer">
                <Products />
            </div>
            <Footer />
        </>
    )
}