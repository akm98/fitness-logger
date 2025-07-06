import type { FlattenWorkoutData } from "@/types/WorkoutTableTypes";
import type { ColDef } from "ag-grid-community";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

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
