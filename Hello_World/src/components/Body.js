import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { PRODUCT } from "../utils/constants";

const Body = () => {
    const [ restoData, setRestoData ] = useState([]);
    const [ searchText, setSearchText ] = useState('');
    const [ productData, setProductData ]= useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    fetchData = async () => {
        const data = await fetch(PRODUCT);
        const jsonData = await data.json();
        setRestoData(jsonData)
        setProductData(jsonData);
    }

    searchHandler = () => {
        const filteredData = productData.filter((item) => item?.title.toLowerCase().includes(searchText.toLowerCase()));
        setRestoData(filteredData);
    }

    return !restoData.length ? ( <Shimmer /> ): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="search-box"  
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="search-btn" onClick={searchHandler}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                        setRestoData(restoData.filter(
                            (item) => item?.price > 50));
                    }
                }>Top Rated Products</button>
            </div>
            <div className="resto-container">
                {
                    restoData.map((item) => <RestoCard key={item.id} config={item} />)
                }
            </div>
        </div>
    );
}
export default Body;