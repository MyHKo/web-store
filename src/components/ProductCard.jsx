import "../styles/ProductCard.scss"
import { useState } from "react";

export default function ProductCard({ id }) {
    const [productData, setProductData] = useState(null);

    async function fetchProductData() {
        const dataResponse = await fetch(`/database/${id}/${id}.json`)
        const data = await dataResponse.json();

        const imageResponse = await fetch(`/database/${id}/${id}.jpeg`);
        const image = await imageResponse.blob();

        setProductData({
            name: data.name,
            description: data.shortDescription,
            image: URL.createObjectURL(image),
        });
    }

    if (!productData) {
        fetchProductData();
    }

    console.log(productData);

    return (
        <div className="productCard">
                <img className="productImage" src={productData === null ? "LOADING" : productData.image} alt="Rose"/>

            <div className="productDescription">
            <h2 className="productName">{productData === null ? "LOADING" : productData.name}</h2>
                {productData === null ? "LOADING" : productData.description}
            </div>
        </div>
    )
}