import { API } from "./API";

export const signup = async (userData) => {
  try {
    const response = await API.post("/api/auth/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signin = async (userData) => {
  try {
    const response = await API.post("/api/auth/signin", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
