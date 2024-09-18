import ProductCard from './ProductCard.jsx';
import "../styles/Products.scss"

export default function Products() {
    return (
        <>
        <div className="cardsContainer">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        </>
    )
}