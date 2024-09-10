
export const fetchStrapiData = async (path: string) => {
  console.log("path",path,process.env.NEXT_PUBLIC_API_BASE_URL)
  try {
    // Create the full URL with the path
    const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);
    console.log("url",url)
    // Fetch data from the API
    const response = await fetch(url.toString());
    const result = await response.json();
    
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
