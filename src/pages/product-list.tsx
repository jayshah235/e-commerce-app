import { ProductList } from "../components/product-listing-table";
import style from './styles.module.css';

const HomePage = () => {
	return (
		<div className={style.product_Wrapper}>
			<h1 className={style.head_Title}>Product List</h1>
			<ProductList />
		</div>
	);
};

export default HomePage;
