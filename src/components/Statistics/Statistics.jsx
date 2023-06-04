import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  const limitedData = props.stats.slice(0, 4);
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{props.title}</h2>
      <ul className={css.statList}>
        {limitedData.map(stats => (
          <li className={css.item} key={stats.id}>
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  limitedData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
