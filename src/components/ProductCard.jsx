import "../styles/ProductCard.scss"
import rose from "../assets/Rose.jpeg"

export default function ProductCard(props) {


    return (
        <div className="productCard">
                <img className="productImage" src={rose} alt="Rose"/>

            <div className="productDescription">
            <h2 className="productName">Red Rose – Fresh Cut Flower</h2>
                This fresh Red Rose is a classic choice for gifting or decoration. It features deep red
                    petals with a natural sheen and a long, sturdy stem. The rose is carefully harvested to ensure
                    long-lasting freshness and vibrant color.
            </div>
        </div>
    )
}