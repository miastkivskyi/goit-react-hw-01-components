import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOfline}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
