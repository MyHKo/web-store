import "../styles/ProductCard.scss"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ProductCard({ id }) {
    const [productData, setProductData] = useState(null);
    const navigate = useNavigate();

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

    useEffect(() => {
        fetchProductData();
    },[])


    return (
        <div className="productCard" onClick={() => {navigate(`/catalog/${id}`)}}>
                <img className="productImage" src={productData === null ? "LOADING" : productData.image} alt="Rose"/>

            <div className="productDescription">
            <h2 className="productName">{productData === null ? "LOADING" : productData.name}</h2>
                {productData === null ? "LOADING" : productData.description}
            </div>
        </div>
    )
}