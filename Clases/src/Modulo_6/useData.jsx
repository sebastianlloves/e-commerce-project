import { useState, useEffect } from "react";
import axios from "axios";

const useData = (recurso = 'posts') => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      await axios
        .get(`https://jsonplaceholder.typicode.com/${recurso}`)
        .then((response) => setData(response.data));
    })();
  }, []);

  console.log(data);

  return data;
};

export default useData;
