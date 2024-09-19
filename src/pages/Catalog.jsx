import Header from "../components/Header";
import Footer from "../components/Footer";
import CatalogTable from "../components/CatalogTable";
import Filters from "../components/Filters.jsx";
import "../styles/Catalog.scss"

export default function Catalog() {
        return (
            <>
                <Header />
                <div className="main-catalog-container">
                        <Filters />
                        <CatalogTable />
                </div>
                <Footer />
            </>
        )
}