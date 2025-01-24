import axios from "axios";

// API call to fetch questions
export const fetchQuestions = async (query, type, page, limit = 10) => {
  const api = process.env.REACT_APP_API_URI;
  try {
    const response = await axios.post(api + "/api/search", {
      query,
      type: type !== "NO FILTER" ? type : undefined,
      page,
      limit,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
