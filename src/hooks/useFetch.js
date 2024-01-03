import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res);
        setData(res);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);
  return { data };
}
