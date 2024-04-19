import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function useFetch({baseURL, target}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios({
      baseURL,
      url: target
    })
      .then(res => setData(res.data))
      .finally(() => setLoading(false))
  }, [baseURL, target])
  

  return [data, loading]
}
