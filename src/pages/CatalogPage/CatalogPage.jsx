import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import CatalogTable from "./components/CatalogTable.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/thunk.js";
import "../../styles/Catalog.scss"

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