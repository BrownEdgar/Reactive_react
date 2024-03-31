import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import Quotes from "./components/Quotes/Quotes";
import "./App.scss";

export default function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    axios
      .get("https://dummyjson.com/quotes")
         .then((res) => setData(res.data.quotes))
         .finally(setLoader(false));
  }, []);

  return (
    <div className="app">
      <h1 className="app__title">Philosophys</h1>
      <Quotes data={data} />
    </div>
  );
}
