import { useEffect, useState } from "react";

export default function useFetch(url, param = "") {
  const [data, setData] = useState({
    data1: [],
    error: "",
    isPending: true,
    filtered: [],
  });

  useEffect(() => {
    fetch(`${url}/${param}`)
      .then((res) => res.json())
      .then((json) =>
        setData(
          (prev) =>
            (prev = {
              ...prev,
              data1: json,
              isPending: false,
              filtered: json,
            })
        )
      )
      .catch((error) =>
        setData(
          (prev) =>
            (prev = {
              ...prev,
              error: error,
            })
        )
      );
  }, [url, param]);
  return [data, setData];
}
