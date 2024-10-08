import Header from "@components/Header/Header.jsx";
import Footer from "@components/Footer/Footer.jsx";
import CatalogTable from "@catalogPage/components/CatalogTable.jsx";
import "@catalogPage/styles/CatalogPage.scss"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "@redux/thunk.js";

export default function CatalogPage() {
        const dispatch = useDispatch();
        const { productIdAndNameList } = useSelector((state) => state.globalStateSlice);

        useEffect(() => {
                dispatch(getProducts());
        },[])

        return (
            <>
                <Header isInCart={false} canSearch={true}/>
                <div className="main-catalog-container">
                        {productIdAndNameList === null ? "LOADING" : <CatalogTable/>}
                </div>
                <Footer />
            </>
        )
}