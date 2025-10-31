import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const employeeAPI = axios.create({
  baseURL: `${VITE_API_URL}`,
});

export const registerEmployee = async (data) => {
  return await employeeAPI.post(
    "/employee",
    {
      data,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
