import { useState, useEffect } from "react";

//Custom hook to fetch currency data
const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
        .then(res => res.json())
        .then(res => setData(res[currency]))
        console.log("old  data:", data)
    }, [currency])
    console.log("fetched data:", data)
    return data
}

export default useCurrencyInfo;


