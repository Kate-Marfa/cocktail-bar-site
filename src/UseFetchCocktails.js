import { useState, useEffect } from "react";

function useFetchCocktails({ apiUrl }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!apiUrl) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `${apiUrl}`;
        console.log("Fetching:", apiUrl);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");

        const json = await res.json();
        setData(json.drinks || []);
      } catch (err) {
        setError("Failed to download.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
}

export default useFetchCocktails;
