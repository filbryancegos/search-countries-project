
export default function useFetch(url) {
  const fetchAll = async () => {
    try {
      const response = await fetch(url);
      const data = response.json();
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return { fetchAll }
}
