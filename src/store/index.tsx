import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { productDeatils } from "../components/product-listing-table";

const CreateStore = createContext(
  {} as {
    productsApi: productDeatils[];
    setProductsApi: Dispatch<SetStateAction<productDeatils[]>>;
  }
);

export const StoreProvider = ({ children }: { children: ReactElement }) => {
  const [productsApi, setProductsApi] = useState([] as productDeatils[]);
  const handleApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const res = await response?.json();
      setProductsApi(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);
  return (
    <CreateStore.Provider value={{ productsApi, setProductsApi }}>
      {children}
    </CreateStore.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CreateStore);
};
