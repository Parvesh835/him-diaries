import { API } from "./API";

export const addGalleryItem = async (galleryData) => {
  try {
    const response = await API.post("/api/gallery", galleryData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getGalleryItems = async () => {
  try {
    const response = await API.get("/api/gallery");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateGalleryItem = async ({ id, ...data }) => {
  try {
    const response = await API.put(`/api/gallery/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteGalleryItem = async (id) => {
  try {
    const response = await API.delete(`/api/gallery/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
