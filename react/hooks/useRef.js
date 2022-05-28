import React, { useEffect, useRef } from "react";


// Example 1:
const refContainer = useRef(initialValue);

// -------------------------------------------------------
// Example 2:
const App = () => {
  const fetchAPI = useRef(() => { });

  fetchAPI.current = async () => {
    const { data } = await axios.get('url');
    return data;
  }

  useEffect(() => {
    fetchAPI.current()
  }, [])
}