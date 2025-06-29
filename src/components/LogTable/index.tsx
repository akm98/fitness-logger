import { useMemo, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import { logTableData } from "../../data/logTableData.ts";
import type { WorkoutData } from "@/types/LogTableTypes";
import type { ColDef } from "ag-grid-community";
import { LogTableColumnDefs } from "@/utils/constants.ts";
import { themeBalham } from "ag-grid-community";

// interface Props {
//   data: WorkoutData[];
// }

const LogTable = () => {
  const flattenedData = logTableData.flatMap((workout) =>
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
  const [rowData] = useState<WorkoutData[]>(flattenedData);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "50vh" }} className=" borders-b-2">
      <AgGridReact
        rowData={rowData}
        columnDefs={LogTableColumnDefs}
        defaultColDef={defaultColDef}
        enableCellSpan={true}
        animateRows={true}
        theme={themeBalham}
      />
    </div>
  );
};

export default LogTable;
