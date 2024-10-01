import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/thunk.js";
import "../styles/Home.scss"

export default function Home() {
    const dispatch = useDispatch();
    const { productIdAndNameList } = useSelector((state) => state.globalStateSlice);

    useEffect(() => {
            dispatch(getProducts());
    }, [])

    return (
        <>
            <Header  productIdAndNameList={productIdAndNameList} isInCart={false}/>
            <div className="mainContainer">
                {productIdAndNameList === null ? "LOADING" : <Products productIdAndNameList={productIdAndNameList} isInCart={false}/>}
            </div>
            <Footer />
        </>
    )
}