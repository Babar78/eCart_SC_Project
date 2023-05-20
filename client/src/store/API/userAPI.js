import axios from "axios";

export const fetchUserData = async (userId) => {
  try {
    // Perform an API request to fetch user data
    const response = await axios.get(`http://localhost:5000/user/${userId}`);

    // Extract the user data from the response
    const userData = response.data;

    // Return the fetched user data
    return userData;
  } catch (error) {
    // Handle any errors that occurred during the API request
    console.error("Error fetching user data:", error);
    throw error;
  }
};
