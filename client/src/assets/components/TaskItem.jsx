
import "./TaskItem.css";

export function TaskItem({ title, dueDate, status, priority }) {
  return (
    <div className="taskItem">

      <div className="taskHeader">
        <h3 className="taskTitle">{title}</h3>
        <button className="taskMenu">⋮</button>
      </div>

      <p className="taskDueDate">
        Due Date: {dueDate}
      </p>

      <div className="taskFooter">
        <span className={`taskStatus ${status.toLowerCase().replace(" ", "-")}`}>
          {status}
        </span>

        <span className={`taskPriority ${priority.toLowerCase()}`}>
          {priority} Priority
        </span>
      </div>

    </div>
  );
}
