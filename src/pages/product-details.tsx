import { Link } from "react-router-dom";
import { SingleProductPage } from "../components/single-product-page";
import style from "./styles.module.css";

const ProductDetail = () => {
  return (
    <div className={style.product_Wrapper}>
      <h1 className={style.head_Title}>Product Details</h1>
      <SingleProductPage />
      <div className={style.link_Btn}>
        <button type="button">
          <Link to="/e-commerce-app">Get Back to homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
