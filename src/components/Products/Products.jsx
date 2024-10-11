import ProductCard from '@components/ProductCard/ProductCard.jsx';
import style from "@components/Products/Products.module.scss"

export default function Products({ productIdAndNameList, isInCart }) {

    const productCardsList = productIdAndNameList.map((item) => (
        <ProductCard id={item[0]} key={item[0]} isInCart={isInCart}/>
    ))

    return (
        <>
        <div className={style.cardsContainer}>
            {productCardsList}
        </div>
        </>
    )
}