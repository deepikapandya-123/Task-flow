import "./Statcard.css";

export function Statcard({ icon, count, title }) {
  return (
    <div className="statCard">
      <div className="statIcon">
        {icon}
      </div>

      <h2>{count}</h2>
      <h3>{title}</h3>
    </div>
  );
}