import { useState } from "react";

import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import { logTableData } from "../../data/logTableData.ts";
import type { WorkoutData } from "@/types/LogTableTypes";
import type { ColDef } from "ag-grid-community";
import { LogTableColumnDefs } from "@/utils/constants.ts";

interface Props {
	data: WorkoutData[];
}
const LogTable = ({ data }: Props) => {
	const [rowData] = useState<WorkoutData[]>([...data, ...logTableData]);
	
	const defaultColDef: ColDef = {
		flex: 1,
	};
	return (
		<div style={{ width: "100%", height: "50vh" }}>
			<AgGridReact
				rowData={rowData}
				columnDefs={LogTableColumnDefs}
				defaultColDef={defaultColDef}
			/>
		</div>
	);
};

export default LogTable;
