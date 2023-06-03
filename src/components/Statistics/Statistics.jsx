import data from './data.json';
// import css from './Statistics.module.css';

const Statistics = () => {
  for (let i = 0; i < 4; i += 1) {
    const label = data[i].label;
    const percentage = data[i].percentage;
    console.log(label);
    console.log(percentage);

    return (
        <section className="statistics">
      <h2 className="title">Upload stats</h2>
    
      <ul className="stat-list">
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  )};

  
  ;
};

export default Statistics;
