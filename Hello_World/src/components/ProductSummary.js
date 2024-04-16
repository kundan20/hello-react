import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useLocation, useParams } from "react-router-dom";
import { PRODUCT } from "../utils/constants";

const ProductSummary = () => {
    const [ product, setProduct ] = useState({});
    const { pId } = useParams();
    const locationState = useLocation();

    // const fetchProduct = async () => {
    //     const productRes = await fetch(`${PRODUCT}${pId}`);
    //     const productData = await productRes.json();
    //     setProduct(productData);
    // }

    // useEffect(() => {
    //     fetchProduct();
    // }, []);

    // const { title, category, description, price } = product;
    const { title, category, description, price } = locationState.state;

    // return !Object.keys(product).length ? (<Shimmer /> ): (
    return !Object.keys(locationState.state).length ? (<Shimmer /> ): (
        <div className="summary">
            <h1>Product: {title}</h1>
            <h3>Category: {category}</h3>
            <div><b>Description:</b> {description}</div>
            <div><b>Price:</b> {price}</div>
        </div>
    );
}
export default ProductSummary;