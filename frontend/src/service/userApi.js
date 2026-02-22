import { API } from "./API";

export const getAllUsers = async () => {
  try {
    const res = await API.get("/api/users");
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
