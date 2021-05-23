import { useEffect, useState } from 'react';

const useFetch = (url: string, initial: Array<object> = []) => {
  const [response, setResponse] = useState(initial);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return response;
};

export default useFetch;