import { Link } from "react-router-dom";
import { PRODUCT_URL } from "../utils/constants";

const RestoCard = (props) => {
    const { config } = props;
    const { category, price, title, image, id } = config;
    return (
        <Link to={`${PRODUCT_URL}${id}`} state={config}>
            <div className="resto-card">
                    <img alt="Restaurant image" src={image} />
                    <div className="resto-card-desc">
                        <h3>{title}</h3>
                        <span style={{textTransform: 'capitalize'}}><b>{category}</b></span>
                        <span>$ {price}</span>
                    </div>
            </div>
        </Link>
    );
}
export default RestoCard;