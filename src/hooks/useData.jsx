import { useEffect, useState } from "react";

export default function useData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => {
        // if(!response.ok) throw new Error('Error de conexión')
        return response.json();
      })
      .then((json) => setData(json))
      .catch(error => setError(error))
      .finally(()=> setLoading(false))
  }, []);

  return { data, loading, error };
}
