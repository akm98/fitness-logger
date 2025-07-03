import Header from "@/components/Header";
import LogForm from "@/components/LogForm";
import LogTable from "@/components/LogTable";
import Show, { Else, If } from "@/components/Show"; 
import type { WorkoutData } from "@/types/LogTableTypes";
import { useState } from "react"; 

const Home = () => { 
  const [showFitnessLog, setShowFitnessLog] = useState(false);
  const [, setLogData] = useState<WorkoutData[]>([]);
  return (
		<>
		<Header 
		showFitnessLog={showFitnessLog}
		setShowFitnessLog={setShowFitnessLog}
		/>
    <div className="p-4 space-y-6 w-full ">
      

      <Show condition={showFitnessLog}>
        <If>
          <LogTable
          // data={logData}
          />
        </If>
        <Else>
          <LogForm setFormValues={setLogData} />
        </Else>
      </Show>
    </div>
		</>

  );
};

export default Home;
