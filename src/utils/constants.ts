import type { FlattenWorkoutData } from "@/types/WorkoutTableTypes";
import type { ColDef } from "ag-grid-community";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

export const bodyPartsOptions = [
	{ label: "Legs", value: "Legs" },
	{ label: "Back Biceps", value: "Back Biceps" },
	{ label: "Chest Shoulders Triceps", value: "Chest Shoulders Triceps" },
	{ label: "Cardio", value: "Cardio" },
	{ label: "Abs", value: "Abs" },
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
		label: "Inclined Bench Press",
		value: "Inclined Bench Press",
		bodyPart: "Chest Shoulders Triceps",
	},
	{
		label: "Overhead Press",
		value: "Overhead Press",
		bodyPart: "Chest Shoulders Triceps",
	},
	{
		label: "Lateral Raises",
		value: "Lateral Raises",
		bodyPart: "Chest Shoulders Triceps",
	},
	{
		label: "Tricep Pushdown",
		value: "Tricep Pushdown",
		bodyPart: "Chest Shoulders Triceps",
	},
	{ label: "Bicep Curls", value: "Bicep Curls", bodyPart: "Back Biceps" },
	{ label: "Lunges", value: "Lunges", bodyPart: "Legs" },
	{ label: "Leg Curls", value: "Leg Curls", bodyPart: "Legs" },
	{ label: "Leg Extensions", value: "Leg Extensions", bodyPart: "Legs" },
	{
		label: "Lat Pulldowns Wide",
		value: "Lat Pulldowns Wide",
		bodyPart: "Back Biceps",
	},
	{
		label: "Lat Pulldowns Close",
		value: "Lat Pulldowns Close",
		bodyPart: "Back Biceps",
	},

	{ label: "Seated Rows", value: "Seated Rows", bodyPart: "Back Biceps" },
	{ label: "Rope Curls", value: "Rope Curls", bodyPart: "Back Biceps" },
	{ label: "Hammer Curls", value: "Hammer Curls", bodyPart: "Back Biceps" },
	{ label: "Preacher Curls", value: "Preacher Curls", bodyPart: "Back Biceps" },
	{ label: "Cable Rows", value: "Cable Rows", bodyPart: "Back Biceps" },
	{ label: "Shrugs", value: "Shrugs", bodyPart: "Back Biceps" },
	{
		label: "Forearms Extensions",
		value: "Forearms Extensions",
		bodyPart: "Back Biceps",
	},
	{
		label: "Chest Supported Rows",
		value: "Chest Supported Rows",
		bodyPart: "Back Biceps",
	},

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

export const WorkoutTableColumnDefs: ColDef<FlattenWorkoutData>[] = [
	{
		headerName: "Date",
		field: "date",
		spanRows: true,
		autoHeight: true,
		cellClass: [
			"",
			"font-semibold",
			"flex-imp",
			"justify-center",
			"height-[100%]",
			"border border-b-4",
		],
		valueFormatter: (params) => {
			const date = dayjs(params.value).format("DD MMM, YYYY");
			return date;
		},
	},
	{
		headerName: "Body Part",
		field: "bodyPart",
		spanRows: true,
		autoHeight: true,
		cellClass: ["font-semibold", "flex-imp", "justify-center", "height-[100%]"],
	},
	{
		headerName: "Exercise",
		field: "exerciseName",
		spanRows: true,
		autoHeight: true,
		cellClass: ["font-semibold", "flex-imp", "justify-center", "height-[100%]"],
	},

	{
		headerName: "Weight",
		field: "weight",
		valueFormatter: (params) => `${params.value} ${params?.data?.weightMetric}`,
	},
	{ headerName: "Reps", field: "reps" },
];
