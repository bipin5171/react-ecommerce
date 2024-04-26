import NavBar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/componets/ProductDetails";
import Footer from "../features/common/Footer";

function ProductDetailsPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetails></ProductDetails>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailsPage;