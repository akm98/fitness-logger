import type { WorkoutData } from "@/types/WorkoutTableTypes";
import { API_V1 } from "./axios";

export const getAllWorkoutData = async () => {
	const response = await API_V1.get("/workout/all");
	if (response.status === 200) {
		return response.data.data;
	}
	return response.data;
};

export const createWorkout = async (data: WorkoutData) => {
	const response = await API_V1.post("/workout/create", data);
	if (response.status === 201) {
		return response.data.message;
	}
	return response.data;
};
