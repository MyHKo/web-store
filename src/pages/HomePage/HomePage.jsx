import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Products from "../../components/Products.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/thunk.js";
import "../../styles/Home.scss"

export default function HomePage() {
    const dispatch = useDispatch();
    const { filteredProducts } = useSelector((state) => state.globalStateSlice);

    useEffect(() => {
            dispatch(getProducts());
    }, [])

    return (
        <>
            <Header isInCart={false} canSearch={true}/>
            <div className="mainContainer">
                {filteredProducts === null ? "LOADING" : <Products isInCart={false} productIdAndNameList={filteredProducts}/>}
            </div>
            <Footer />
        </>
    )
}