import css from './StatisticElement.module.css';
import PropTypes from 'prop-types';

export function StatisticElement({ label, percentage, style }) {
  return (
    <li className={css.item} style={style}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
