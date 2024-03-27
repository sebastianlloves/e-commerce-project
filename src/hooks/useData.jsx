import { useEffect, useState } from "react";
import { filterProductsByCategory } from "../utils/filterProductsByCategory";

export default function useData(url, productsCategory) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false)
    setLoading(true)
    console.log('Haciendo fetching datos')
    fetch(url)
      .then((response) => {
        if(!response.ok) throw new Error('Error de conexión')
        return response.json();
      })
      .then((json) => {
        const filteredProducts = filterProductsByCategory(json, productsCategory)
        setData(filteredProducts)
      })
      .catch(error => setError(error))
      .finally(()=> setLoading(false))
  }, [productsCategory]);

  return { data, loading, error };
}
