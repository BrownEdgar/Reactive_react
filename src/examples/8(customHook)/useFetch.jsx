import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function useFetch({ baseURL, target }) {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      baseURL,
      url: target
    })
      .then(res => setdata(res.data))
      .finally(() => setLoading(false))

  }, [baseURL, target])


  return [data, loading]
}
