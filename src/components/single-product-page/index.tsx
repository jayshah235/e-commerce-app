import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/productSlice";
import { productDeatils } from "../product-listing-table";
import style from "./style.module.css";

export const SingleProductPage = () => {
	   const { slug } = useParams();
	   const product: { products?: { products: productDeatils[] } } =
	       useSelector((state) => state) ?? {};
	   const productsApi = product?.products?.products ?? [];
	   const dispatch = useDispatch();
	   useEffect(() => {
	       if (!productsApi?.length) {
	           (async () => {
	               await dispatch(fetchProducts());
	           })();
	       }
	   }, []);
	   const [addItem, setAddItem] = useState(1);
	   let getSingleProductData = null;
	   if (productsApi?.length) {
	       getSingleProductData = productsApi?.find(
	           (s: productDeatils) => s?.id === Number(slug),
	       );
	   }
	
	   if (!getSingleProductData) {
	       return <p>loading...</p>;
	   }

	return (
		<>
			<div className={style.product_Wrapper}>
				<section className={style.img_Section}>
					<div className={style.img_Align}>
						<img src={getSingleProductData?.image} alt="" />
					</div>
				</section>
				<section className={style.content_Section}>
					<p className={style.offer}>sale</p>
					<p className={style.product_Type}>{getSingleProductData?.category}</p>
					<h3>{getSingleProductData?.title}</h3>
					<p className={style.ratings}>Ratings: {getSingleProductData?.rating?.rate}</p>
					<p className={style.price}>{`$${getSingleProductData?.price}`}</p>
					<div className={style.border_Items}>
						<div>
							<div className={style.inline_Items}>
								<span>Size</span>
								<span className={style.select_Option}>
									<select>
										<option value="">Choose your size</option>
										<option value="">test</option>
										<option value="">test</option>
									</select>
								</span>
							</div>
							<p className={style.text_Right}>size chart</p>
						</div>
						<div>
							<div className={style.inline_Items}>
								<span>Quantity</span>
								<span className={style.add_Items}>
									{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
									<p onClick={() => setAddItem(addItem - 1)}>-</p>
									<p>{addItem}</p>
									{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
									<p onClick={() => setAddItem(addItem + 1)}>+</p>
								</span>
							</div>
							<p className={style.count}>
								Available Count:{getSingleProductData?.rating?.count}
							</p>
						</div>
					</div>
					<div className={style.btn_Row}>
						<button type="button">Add to Cart</button>
						<button type="button">Buy Now</button>
					</div>
				</section>
			</div>
		</>
	);
};

