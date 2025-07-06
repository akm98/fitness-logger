import { SESSION_TOKEN } from "@/utils/Constants/staticData";
import axios from "axios";

const API_V1 = axios.create({
	baseURL: `https://fitness-logger-be.vercel.app/api/v1/`,
	headers: {
		"Content-Type": "application/json",
	},
});

API_V1.interceptors.request.use(function (config) {
	const token = sessionStorage.getItem(SESSION_TOKEN) ?? "";
	config.headers["Authorization"] = "Bearer " + token;
	return config;
});

export { API_V1 };
