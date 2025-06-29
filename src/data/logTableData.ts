import type { WorkoutData } from "@/types/LogTableTypes";

export const logTableData: WorkoutData[] = [
  {
    date: new Date("2025-06-29T08:16:56.332Z"),
    bodyPart: "Legs",
    exercises: [
      {
        name: "Squats",
        weightMetric: "kg",
        sets: 3,
        setDetails: [
          { setNumber: 1, weight: 60, reps: 12 },
          { setNumber: 2, weight: 65, reps: 10 },
          { setNumber: 3, weight: 70, reps: 8 }
        ]
      },
      {
        name: "Leg Press",
        weightMetric: "kg",
        sets: 2,
        setDetails: [
          { setNumber: 1, weight: 120, reps: 10 },
          { setNumber: 2, weight: 130, reps: 8 }
        ]
      }
    ]
  },
  {
    date: new Date("2025-06-30T10:24:12.101Z"),
    bodyPart: "Chest",
    exercises: [
      {
        name: "Bench Press",
        weightMetric: "kg",
        sets: 3,
        setDetails: [
          { setNumber: 1, weight: 50, reps: 12 },
          { setNumber: 2, weight: 55, reps: 10 },
          { setNumber: 3, weight: 60, reps: 8 }
        ]
      },
      {
        name: "Chest Fly",
        weightMetric: "kg",
        sets: 2,
        setDetails: [
          { setNumber: 1, weight: 20, reps: 15 },
          { setNumber: 2, weight: 22.5, reps: 12 }
        ]
      }
    ]
  },
  {
    date: new Date("2025-07-01T09:55:20.555Z"),
    bodyPart: "Back",
    exercises: [
      {
        name: "Deadlift",
        weightMetric: "kg",
        sets: 2,
        setDetails: [
          { setNumber: 1, weight: 80, reps: 8 },
          { setNumber: 2, weight: 90, reps: 6 }
        ]
      },
      {
        name: "Lat Pulldown",
        weightMetric: "kg",
        sets: 2,
        setDetails: [
          { setNumber: 1, weight: 40, reps: 12 },
          { setNumber: 2, weight: 45, reps: 10 }
        ]
      }
    ]
  },
  {
    date: new Date("2025-07-02T11:33:40.999Z"),
    bodyPart: "Arms",
    exercises: [
      {
        name: "Bicep Curl",
        weightMetric: "kg",
        sets: 2,
        setDetails: [
          { setNumber: 1, weight: 15, reps: 12 },
          { setNumber: 2, weight: 17.5, reps: 10 }
        ]
      },
      {
        name: "Tricep Pushdown",
        weightMetric: "kg",
        sets: 2,
        setDetails: [
          { setNumber: 1, weight: 25, reps: 12 },
          { setNumber: 2, weight: 30, reps: 10 }
        ]
      }
    ]
  }
]
