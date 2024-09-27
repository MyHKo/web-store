import ProductCard from './ProductCard.jsx';
import "../styles/Products.scss"

export default function Products({ productIdList }) {

    const productCardsList = productIdList.map((item) => (
        <ProductCard id={item} key={item}/>
    ))

    return (
        <>
        <div className="cardsContainer">
            {productCardsList}
        </div>
        </>
    )
}