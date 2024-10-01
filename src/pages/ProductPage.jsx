import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setProductsInCart } from "../redux/slice.js"
import "../styles/ProductPage.scss"

export default function ProductPage() {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const dispatch = useDispatch();
    const { productsInCart } = useSelector((state) => state.globalStateSlice);
    let informationBullets;

    async function getProductData(productId) {
        const data = await fetch(`/database/${productId}/${productId}.json`);
        const dataJson = await data.json();

        const imageResponse = await fetch(`/database/${productId}/${productId}.jpeg`);
        const image = await imageResponse.blob();

        setProductData({...dataJson, image: URL.createObjectURL(image) });
    }

    function createInformationBullets(listOfBullets) {
        const arrayOfBullets = [];
        for(let key in listOfBullets) {
            arrayOfBullets.push(<li key={key}>{key}: {listOfBullets[key]}</li>);
        }
        return (
            <ul>
                {arrayOfBullets}
            </ul>
        );
    }

    function addToCart(productId){
        dispatch(setProductsInCart([...productsInCart, [productId, productData.name]]));
    }

    useEffect(() => {
        getProductData(id);
    }, []);

    if(productData !== null) {
        informationBullets = createInformationBullets(productData.informationPoints);
    }

    return (
        <>
            <Header isInCart={false}/>
            <div className="main-product-container">
                <img className="product-photo" src={productData === null ? "LOADING":productData.image} alt="LOADING" />

                <div className="name-and-description">
                    <h1 className="product-name-on-page">{productData === null ? "LOADING" : productData.name}</h1>
                    <p className="product-description-on-page">
                        <p>{productData === null ? "LOADING" : productData.shortDescription}</p>
                        {informationBullets}
                        <p>{productData === null ? "LOADING" : productData.descriptionExpansion}</p>
                    </p>
                </div>

                <div className="add-to-cart-button-on-page" onClick={() => {addToCart(id)}}>
                    <h2>Add to cart</h2>
                </div>
            </div>
            <Footer />
        </>
        )
}