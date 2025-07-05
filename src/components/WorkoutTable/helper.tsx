import type { WorkoutData } from "@/types/WorkoutTableTypes";

export const flattenWorkoutData = (data: WorkoutData[] = []) => {
	return data.flatMap((workout) =>
		workout.exercises.flatMap((exercise) =>
			exercise.setDetails.map((set) => ({
				date: workout.date,
				bodyPart: workout.bodyPart,
				exerciseName: exercise.name,
				setNumber: set.setNumber,
				weight: set.weight,
				reps: set.reps,
				weightMetric: exercise.weightMetric,
				exercises: workout.exercises,
			}))
		)
	);
};
