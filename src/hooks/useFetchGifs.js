import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((images) => {
      setData([...images]);
      setLoading(false);
    });
  }, [category]);

  return {
    data,
    loading,
  };
};
