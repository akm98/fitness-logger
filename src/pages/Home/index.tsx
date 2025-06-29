import LogForm from "@/components/LogForm";
import LogTable from "@/components/LogTable";
import Show, { Else, If } from "@/components/Show";
import { Button } from "@/components/ui/button";
import type { WorkoutData } from "@/types/LogTableTypes";
import { useState } from "react";

const Home = () => {
	const [showFitnessLog, setShowFitnessLog] = useState(false);
	const [logData, setLogData] = useState<WorkoutData[]>([]);
	return (
		<div className='p-4 space-y-6 w-full border-2'>
			<div className='flex items-center-safe justify-between w-full border-2'>
				<div className='p-4 border-2'>
					<p className='font-bold text-2xl'>fitness_logger</p>
					<p>track_your_fitness_progress </p>
				</div>
				<div className='mx-4'>
					<Button onClick={() => setShowFitnessLog(!showFitnessLog)}>
						<Show condition={showFitnessLog}>
							<If>log_fitness_data</If>
							<Else>show_my_fitness_data</Else>
						</Show>
					</Button>
				</div>
			</div>

			<Show condition={showFitnessLog}>
				<If>
					<LogTable data={logData}/>
				</If>
				<Else>
					<LogForm setFormValues={setLogData}/>
				</Else>
			</Show>
		</div>
	);
};

export default Home;
