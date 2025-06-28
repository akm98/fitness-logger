import { useState } from "react";

import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import dummyData from "../../data/logTableData.json";
import type { WorkoutData } from "@/types/LogTableTypes";
import type { ColDef } from "ag-grid-community";

const LogTable = () => {
	const [rowData] = useState<WorkoutData[]>(dummyData as WorkoutData[]);

	const colDefs: ColDef<WorkoutData>[] = [
		{ field: "date", headerName: "date", sortable: true, filter: true },
		{
			field: "bodyPart",
			headerName: "exercises",
			sortable: true,
			filter: true,
		},
	];

	const defaultColDef: ColDef = {
		flex: 1,
	};
	return (
		<div style={{ width: "100%", height: "50vh" }}>
			<AgGridReact
				rowData={rowData}
				columnDefs={colDefs}
				defaultColDef={defaultColDef}
			/>
		</div>
	);
};

export default LogTable;
