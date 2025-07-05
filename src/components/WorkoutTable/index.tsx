import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import { WorkoutTableColumnDefs } from "@/utils/constants.ts";
import { themeBalham } from "ag-grid-community";
import { useQuery } from "@tanstack/react-query";
import { getAllWorkoutData } from "@/services/index.ts";
import { flattenWorkoutData } from "./helper.tsx";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const WorkoutTable = () => {
	const { t } = useTranslation();
	const { data, error, isFetching, isLoading } = useQuery({
		queryKey: ["workoutData"],
		queryFn: getAllWorkoutData,
	});
	const defaultColDef = useMemo<ColDef>(() => {
		return {
			flex: 1,
		};
	}, []);

	const rowData = useMemo(() => flattenWorkoutData(data), [data]);

	if (error) {
		toast.error(t("Error fetching workout data"));
	}

	return (
		<div style={{ width: "100%", height: "80vh" }} className=' borders-b-2'>
			<AgGridReact
				rowData={rowData}
				columnDefs={WorkoutTableColumnDefs}
				defaultColDef={defaultColDef}
				enableCellSpan={true}
				animateRows={true}
				theme={themeBalham}
				loadingOverlayComponent='agLoadingOverlay'
				loading={isLoading || isFetching}
			/>
		</div>
	);
};

export default WorkoutTable;
