import { Link } from "react-router-dom";
import { useGlobalContext } from "../../store";
import style from "./style.module.css";

export type productDeatils = {
	image?: string;
	title?: string;
	category?: string;
	price?: number;
	count?: number;
	rating?: {
		rate?: number;
		count?: number;
	};
	id?: number;
};

export const ProductList = () => {
	const { productsApi } = useGlobalContext();

	if (!productsApi?.length) {
		return <p>loading...</p>
	}

	return (
		<>
			<table className={style.table_Wrapper} cellPadding={0} cellSpacing={0}>
				<thead className={style.table_Head_Wrapper}>
					<tr>
						<th>Title</th>
						<th>Caterory</th>
						<th>Price</th>
						<th>Available Count</th>
					</tr>
				</thead>
				<tbody className={style.table_Body_Wrapper}>
					{productsApi?.map((i: productDeatils) => (
						<tr key={i?.id}>
							<th>
								<Link to={`${i?.id}`} className={style.inline_Title}>
									<img src={i?.image} alt="" />
									<p>{i?.title}</p>
								</Link>
							</th>
							<th className={style.wid_15}>{i?.category}</th>
							<th className={style.wid_15}>{`$${i?.price} `}</th>
							<th className={style.wid_15}>{i?.rating?.count}</th>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

