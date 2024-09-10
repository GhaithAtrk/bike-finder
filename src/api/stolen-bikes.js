import axios from "axios";

export async function stolenBikes(query , currentPage) {
  
  try {
    const response = await axios.get("https://bikeindex.org/api/v3/search", {
      params: {
        page: currentPage,
        per_page: 10,
        location: "Munich",
        distance: 10,
        stolenness: "proximity",
        query
      },
    });

    const data = await response.data.bikes
    
    return data
  } catch (error) {
    console.log(error);
  }
}

export async function totalStolenBikes(query) {
  try {
    const response = await axios.get("https://bikeindex.org/api/v3/search/count", {
      params: {
        location: "Munich",
        distance: 10,
        stolenness: "proximity",
        query
      },
    });

    const data = await response.data
    
    return data
  } catch (error) {
    console.log(error);
  }
}
