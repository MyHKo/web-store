import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";

export default function ProductPage() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <img src="photo" alt="ProductPhoto" />
                <p>{id}</p>
                    <Footer />

        </>
        )
}