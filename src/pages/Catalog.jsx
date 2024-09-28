import Header from "../components/Header";
import Footer from "../components/Footer";
import CatalogTable from "../components/CatalogTable";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/thunk.js";
import "../styles/Catalog.scss"

export default function Catalog() {
        const dispatch = useDispatch();
        const { productIdList } = useSelector((state) => state.globalStateSlice);

        useEffect(() => {
                dispatch(getProducts());
        },[])

        return (
            <>
                <Header />
                <div className="main-catalog-container">
                        {productIdList === null ? "LOADING" : <CatalogTable productIdList={productIdList}/>}
                </div>
                <Footer />
            </>
        )
}