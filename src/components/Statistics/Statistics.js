import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatisticElement } from '../StatisticElement/StatisticElement';

export function Statistics({ title, stats }) {
  console.log(stats);

  const numberOfElements = stats.length;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(stat => {
          const style = {
            backgroundColor: getRandomHexColor(),
            width: 360 / numberOfElements,
          };
          return (
            <StatisticElement
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
              style={style}
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
