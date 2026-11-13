import "./Dashboard.css";
import { Statcard } from "./Statcard";
import { ListChecks, Clock, CheckCircle } from "lucide-react";
import { TaskItem } from "./TaskItem";

export function Dashboard() {
  return (
    <>
      <div className="statCardWrapper">
        <Statcard title="Total tasks" count={12} icon={<ListChecks />} />
        <Statcard title="Completed" count={7} icon={<CheckCircle />} />
        <Statcard title="Pending" count={5} icon={<Clock />} />
      </div>
      <div>
        <TaskItem title='Design Home page' dueDate='13-11-2026' status='Pending' priority="high"/>
      </div>
    </>
  );
}
