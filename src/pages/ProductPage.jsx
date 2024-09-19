import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import photo from "../assets/Rose.jpeg";
import "../styles/ProductPage.scss"

export default function ProductPage() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <div className="main-product-container">
                <img className="product-photo" src={photo} alt="product-photo" />

                <div className="name-and-description">
                    <h1 className="product-name-on-page">Rose Plant</h1>
                    <p className="product-description-on-page">This fresh Red Rose is a classic choice for gifting or decoration. It features deep red petals with a natural sheen and a long, sturdy stem. The rose is carefully harvested to ensure long-lasting freshness and vibrant color.
                        <ul>
                            <li>Color: Rich red</li>
                        <li>Stem Length: 18–24 inches</li>
                        <li>Fragrance: Light, floral scent</li>
                        <li>Care: Keep in water and away from direct sunlight for longer vase life</li>
                            <li>Packaging: Securely wrapped to maintain freshness during delivery</li>
                        </ul>

                        Perfect for special occasions like anniversaries, birthdays, or just to brighten up any room.</p>
                </div>

                <div className="add-to-cart-button-on-page">
                    <h2>Add to cart</h2>
                </div>
            </div>
            <Footer />
        </>
        )
}