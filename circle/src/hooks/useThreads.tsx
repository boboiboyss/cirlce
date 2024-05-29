import { useState, useEffect } from 'react';
import { ICard } from '../types/types';

export function useThreads() {
  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/threads.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { data };
}