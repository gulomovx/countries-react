import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const getData = async () => {
    setPending(true);
    try {
      const req = await fetch(url);
      const data = await req.json();
      setData(data);
      setPending(false);
      setError(null);
    } catch (err) {
      setPending(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { data, pending, error };
};
