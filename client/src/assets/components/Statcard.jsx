import "./Statcard";

export function Statcard({ icon, count, title }) {
  return (
    <>
      <div className="statcard">
        {icon}
        <h2>{count}</h2>
        <h3>{title}</h3>
      </div>
    </>
  );
}
