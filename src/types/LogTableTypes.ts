export interface WorkoutData {
  date: Date | string; // e.g., "2025-06-28"
  bodyPart: string; // e.g., "Legs", "Back", "Chest and Shoulders"
  exercises: Exercise[];
}

export interface Exercise {
  name: string; // e.g., "Squats", "Leg Press"
  sets: number | undefined;
  weightMetric: "kg" | "lbs";
  setDetails: SetData[];
}

export interface SetData {
  setNumber: number | undefined; // e.g., 1, 2, 3
  weight: number | undefined;
  reps: number | undefined; // number of reps
}

export type FlattenWorkoutData = {
  date: Date | string; // e.g., "2025-06-28",
  bodyPart: string; // e.g., "Legs", "Back", "Chest and Shoulders",
  exerciseName: string; // e.g., "Squats", "Leg Press",
  setNumber: number | undefined; // e.g., 1, 2, 3,
  weight: number | undefined;
  reps: number | undefined; // number of reps
  weightMetric: "kg" | "lbs";
  name: string; // e.g., "Squats", "Leg Press"
  sets: number | undefined;
  setDetails: SetData[];
};
