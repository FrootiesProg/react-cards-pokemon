import { useState } from "react";
import axios from "axios";

// Custom hook for making AJAX requests and managing data
function useAxios(initialData) {
  // State to hold the fetched data
  const [data, setData] = useState(initialData);

  // Function to fetch data from the provided URL
  const fetchData = async (url) => {
    try {
      // Make an AJAX GET request using axios
      const response = await axios.get(url);

      // Update the state with the new data by adding it to the existing data array
      setData((prevData) => [...prevData, response.data]);

      // Log the fetched data for debugging purposes
      console.log("Fetched data:", response.data);
    } catch (error) {
      // Handle errors by logging and possibly displaying an error message
      console.error("Error fetching data:", error);
    }
  };


  return [data, fetchData];
}

export default useAxios;
