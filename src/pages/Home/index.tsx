import Header from "@/components/Header";
import WorkoutForm from "@/components/WorkoutForm";
import WorkoutTable from "@/components/WorkoutTable";
import Show, { Else, If } from "@/components/Show";
import { useState } from "react";

const Home = () => {
	const [showFitnessLog, setShowFitnessLog] = useState(false);
	return (
		<>
			<Header
				showFitnessLog={showFitnessLog}
				setShowFitnessLog={setShowFitnessLog}
			/>
			<div className='p-4 space-y-6 w-full '>
				<Show condition={showFitnessLog}>
					<If>
						<WorkoutTable />
					</If>
					<Else>
						<WorkoutForm />
					</Else>
				</Show>
			</div>
		</>
	);
};

export default Home;
