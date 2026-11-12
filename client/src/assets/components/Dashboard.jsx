import "./Dashboard.css";
import { Statcard } from "./Statcard";
import { ListChecks, Clock, CheckCircle } from "lucide-react";

export function Dashboard() {
  return (
    <>
      <div>
        <Statcard title="Total tasks" count={12} icon={<ListChecks />} />
        <Statcard title="Completed" count={7} icon={<CheckCircle />} />
        <Statcard title="Pending" count={5} icon={<Clock />} />
      </div>
    </>
  );
}
