import ProductCard from './ProductCard.jsx';
import "../styles/Products.scss"

export default function Products({ productIdAndNameList, isInCart }) {

    const productCardsList = productIdAndNameList.map((item) => (
        <ProductCard id={item[0]} key={item[0]} isInCart={isInCart}/>
    ))

    return (
        <>
        <div className="cardsContainer">
            {productCardsList}
        </div>
        </>
    )
}