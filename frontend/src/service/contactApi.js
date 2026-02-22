import { API } from "./API";

export const submitContact = async (contactData) => {
  try {
    const response = await API.post("/api/contact", contactData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMessages = async () => {
  try {
    const response = await API.get("/api/contact");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
