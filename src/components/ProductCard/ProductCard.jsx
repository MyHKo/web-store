import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setProductsInCart} from "@redux/slice.js";
import style from "@components/ProductCard/ProductCard.module.scss"


export default function ProductCard({ id, isInCart }) {
    const [productData, setProductData] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productsInCart } = useSelector((state) => state.globalStateSlice);

    async function fetchProductData() {
        const dataResponse = await fetch(`/database/${id}/${id}.json`)
        const data = await dataResponse.json();

        const imageResponse = await fetch(`/database/${id}/${id}.jpeg`);
        const image = await imageResponse.blob();

        await setProductData({
            name: data.name,
            description: data.shortDescription,
            image: URL.createObjectURL(image),
        });
    }

    function removeProductFromCart(productId) {
        for(let i = 0; i < productsInCart.length; i++) {
            if(productId === productsInCart[i][0]){
                console.log(productsInCart.slice(0,i).concat(productsInCart.slice(i+1)));
                dispatch(setProductsInCart(productsInCart.slice(0,i).concat(productsInCart.slice(i+1))))
            }
        }
    }

    useEffect(() => {
        fetchProductData();
    },[])

    return (
        <div className={style.productCard}>
                <img className={style.productImage} onClick={() => {navigate(`/catalog/${id}`)}} src={productData === null ? "LOADING" : productData.image} alt="Rose"/>

            <div className={style.productDescription}>
            <h2 className={style.productName} onClick={() => {navigate(`/catalog/${id}`)}}>{productData === null ? "LOADING" : productData.name}</h2><br/>
                {productData === null ? "LOADING" : productData.description}
            </div>
            {isInCart && <div className={style.removeProductButton} onClick={() => {removeProductFromCart(id)}}><h3>Remove</h3></div>}
        </div>
    )
}