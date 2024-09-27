import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/thunk.js";
import "../styles/Home.scss"

export default function Home() {
    const dispatch = useDispatch();
    const { productIdList } = useSelector((state) => state.globalStateSlice);

    useEffect(() => {
        if(productIdList === null) {
            dispatch(getProducts());
        }
    })

    return (
        <>
            <Header />
            <div className="mainContainer">
                {productIdList === null ? "LOADING" : <Products productIdList={productIdList} />}
            </div>
            <Footer />
        </>
    )
}