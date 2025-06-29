import LogForm from "@/components/LogForm";
import LogTable from "@/components/LogTable";
import Show, { Else, If } from "@/components/Show";
import { Button } from "@/components/ui/button";
import type { WorkoutData } from "@/types/LogTableTypes";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [showFitnessLog, setShowFitnessLog] = useState(false);
  const [, setLogData] = useState<WorkoutData[]>([]);
  return (
    <div className="p-4 space-y-6 w-full ">
      <div className="flex items-center-safe justify-between w-full ">
        <div className="p-4 ">
          <p className="font-bold text-2xl">{t("fitness_logger")}</p>
          <p>{t("track_your_fitness_progress")} </p>
        </div>
        <div className="mx-4">
          <Button onClick={() => setShowFitnessLog(!showFitnessLog)}>
            <Show condition={showFitnessLog}>
              <If>{t("log_fitness_data")}</If>
              <Else>{t("show_my_fitness_data")}</Else>
            </Show>
          </Button>
        </div>
      </div>

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
  );
};

export default Home;
