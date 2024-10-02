import ProductCard from './ProductCard.jsx';
import {useSelector} from 'react-redux';
import "../styles/Products.scss"

export default function Products({ isInCart }) {
    const { filteredProducts } = useSelector((state) => state.globalStateSlice);

    const productCardsList = filteredProducts.map((item) => (
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