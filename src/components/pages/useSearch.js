import React, { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;

const useSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (term) {
      fetchData();
    }
  }, [term]);

  return { data };
};

export default useSearch;
