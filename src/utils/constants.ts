import type { WorkoutData } from "@/types/LogTableTypes";
import type { ColDef } from "ag-grid-community";

export const bodyPartsOptions = [
	{ label: "Legs", value: "Legs" },
	{ label: "Back Biceps", value: "Back Biceps" },
	{ label: "Chest Shoulders Triceps", value: "Chest Shoulders Triceps" },
];

export const setOptions = [
	{ label: "1", value: 1 },
	{ label: "2", value: 2 },
	{ label: "3", value: 3 },
	{ label: "4", value: 4 },
	{ label: "5", value: 5 },
];

export const exercisesOptions = [
	{ label: "Squats", value: "Squats", bodyPart: "Legs" },
	{ label: "Leg Press", value: "Leg Press", bodyPart: "Legs" },
	{ label: "Deadlifts", value: "Deadlifts", bodyPart: "Back Biceps" },
	{ label: "Pull-Ups", value: "Pull-Ups", bodyPart: "Back Biceps" },
	{
		label: "Bench Press",
		value: "Bench Press",
		bodyPart: "Chest Shoulders Triceps",
	},
	{
		label: "Overhead Press",
		value: "Overhead Press",
		bodyPart: "Chest Shoulders Triceps",
	},
	{
		label: "Tricep Dips",
		value: "Tricep Dips",
		bodyPart: "Chest Shoulders Triceps",
	},
	{ label: "Bicep Curls", value: "Bicep Curls", bodyPart: "Back Biceps" },
	{ label: "Lunges", value: "Lunges", bodyPart: "Legs" },
	{ label: "Leg Curls", value: "Leg Curls", bodyPart: "Legs" },
	{ label: "Leg Extensions", value: "Leg Extensions", bodyPart: "Legs" },
	{ label: "Lat Pulldowns", value: "Lat Pulldowns", bodyPart: "Back Biceps" },
	{ label: "Seated Rows", value: "Seated Rows", bodyPart: "Back Biceps" },
	{
		label: "Chest Fly",
		value: "Chest Fly",
		bodyPart: "Chest Shoulders Triceps",
	},
	{
		label: "Shoulder Press",
		value: "Shoulder Press",
		bodyPart: "Chest Shoulders Triceps",
	},
	{
		label: "Cable Tricep Extensions",
		value: "Cable Tricep Extensions",
		bodyPart: "Chest Shoulders Triceps",
	},
	{ label: "Hammer Curls", value: "Hammer Curls", bodyPart: "Back Biceps" },
	{ label: "Calf Raises", value: "Calf Raises", bodyPart: "Legs" },
	{ label: "Plank", value: "Plank", bodyPart: "Core" },
	{ label: "Russian Twists", value: "Russian Twists", bodyPart: "Core" },
	{ label: "Leg Raises", value: "Leg Raises", bodyPart: "Core" },
	{ label: "Bicycle Crunches", value: "Bicycle Crunches", bodyPart: "Core" },
	{ label: "Mountain Climbers", value: "Mountain Climbers", bodyPart: "Core" },
	{ label: "Burpees", value: "Burpees", bodyPart: "Full Body" },
	{ label: "Jumping Jacks", value: "Jumping Jacks", bodyPart: "Full Body" },
	{ label: "High Knees", value: "High Knees", bodyPart: "Full Body" },
	{ label: "Box Jumps", value: "Box Jumps", bodyPart: "Full Body" },
	{
		label: "Kettlebell Swings",
		value: "Kettlebell Swings",
		bodyPart: "Full Body",
	},
	{ label: "Battle Ropes", value: "Battle Ropes", bodyPart: "Full Body" },
	{ label: "Rowing Machine", value: "Rowing Machine", bodyPart: "Full Body" },
	{
		label: "Treadmill Sprints",
		value: "Treadmill Sprints",
		bodyPart: "Full Body",
	},
	{ label: "Cycling", value: "Cycling", bodyPart: "Full Body" },
	{ label: "Elliptical", value: "Elliptical", bodyPart: "Full Body" },
	{ label: "Stair Climber", value: "Stair Climber", bodyPart: "Full Body" },
	{ label: "Swimming", value: "Swimming", bodyPart: "Full Body" },
	{ label: "Yoga", value: "Yoga", bodyPart: "Full Body" },
	{ label: "Pilates", value: "Pilates", bodyPart: "Full Body" },
	{ label: "Core Workouts", value: "Core Workouts", bodyPart: "Core" },
];

export const weightMetricOptions = [
	{ label: "kg", value: "kg" },
	{ label: "lbs", value: "lbs" },
];


export const LogTableColumnDefs: ColDef<WorkoutData>[] = [
    { field: "date", headerName: "date", sortable: true, filter: true },
    {
      field: "bodyPart",
      headerName: "exercises",
      sortable: true,
      filter: true,
    },
    {
	  field: "exercises",
	  headerName: "sets",
	  sortable: true,
	  filter: true,
    valueGetter: params => {
      console.log('params', params); // TODO remove in next commit
      return 'a'
    }

    },
  ];
