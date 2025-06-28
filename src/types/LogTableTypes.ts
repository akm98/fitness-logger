export interface WorkoutData {
  date: string;                // e.g., "2025-06-28"
  bodyPart: string;            // e.g., "Legs", "Back", "Chest and Shoulders"
  exercises: Exercise[];
}

export interface Exercise {
  name: string;                // e.g., "Squats", "Leg Press"
  sets: SetData[];
}

export interface SetData {
  setNumber: number;           // e.g., 1, 2, 3
  weight: number;     
  weightMetric : "kg" | "lbs"         
  reps: number;                // number of reps
}
