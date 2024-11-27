import { useEffect } from "react";

function FetchData({ endpoint, setData }) {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [endpoint, setData]);

  return null;
}

export default FetchData;
