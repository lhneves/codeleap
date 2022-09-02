import axios from "../services/axios";
import useSWR from 'swr';

export function useFetch(url) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await axios.get(url);
    return response.data;
  });

  return { data: data, isLoading: !error && !data, hasError: error };
}
