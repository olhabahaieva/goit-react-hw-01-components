import data from './data.json';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = () => {
  const limitedData = data.slice(0, 4); // Get the first 4 items

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {limitedData.map((item) => (
          <li className={css.item} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes ={
 title: PropTypes.string,
 id: PropTypes.string.isRequired,
 label: PropTypes.string.isRequired,
 percentage: PropTypes.number.isRequired
}

export default Statistics;
