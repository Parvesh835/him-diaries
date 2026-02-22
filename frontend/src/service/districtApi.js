import { API } from "./API";

export const createDistrict = async (districtData) => {
  try {
    const response = await API.post("/api/districts", districtData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllDistricts = async () => {
  try {
    const response = await API.get("/api/districts");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDistrictByName = async (name) => {
  try {
    const response = await API.get(`/api/districts/${name}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDistrict = async ({ id, ...data }) => {
  try {
    const response = await API.put(`/api/districts/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDistrict = async (id) => {
  try {
    const response = await API.delete(`/api/districts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
