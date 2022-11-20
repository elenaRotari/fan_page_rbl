import { useEffect, useState } from "react";

export default function useFetch(url, param = "") {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1aa84179c4msh3815ad99ff6cf5ep1c089bjsna0886ba6c358",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  const [data, setData] = useState({
    data: [],
    error: "",
    isPending: true,
    filtered: [],
  });

  useEffect(() => {
    fetch(`${url}/${param}`, options)
      .then((res) => res.json())
      .then((json) =>
        setData(
          (prev) =>
            (prev = {
              ...prev,
              data: json,
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
