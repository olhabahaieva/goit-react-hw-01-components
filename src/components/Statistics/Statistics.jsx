import data from './data.json';
// import css from './Statistics.module.css';

const Statistics = () => {
  const limitedData = data.slice(0, 4); // Get the first 4 items

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {limitedData.map((item) => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
