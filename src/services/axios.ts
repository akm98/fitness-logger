import axios from "axios";

export const API_V1 = axios.create({
	baseURL: `https://fitness-logger-be.vercel.app/api/v1/`,
});
