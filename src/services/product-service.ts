export const getProductData = () => {
       const res = fetch("https://fakestoreapi.com/products");
       return res.then(r => r.json());
    }