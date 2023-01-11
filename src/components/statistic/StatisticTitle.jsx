import PropTypes from 'prop-types';
import css from './StatisticTitle.module.css';

export const StatisticTitle = ({ title, children }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

StatisticTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
