import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatisticElement } from '../StatisticElement/StatisticElement';

export function Statistics({ title, stats }) {
  console.log(stats);
  // { id, label, percentage } =  stats;
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <StatisticElement
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}