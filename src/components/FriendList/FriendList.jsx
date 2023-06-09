import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        let statusClass = friend.isOnline ? css.isOnline : css.isOffline;

        return (
          <li className={css.friendElement} key={friend.id}>
            <div className={`${css.status} ${statusClass}`}></div>
            <div className={css.avatar}>
              <img
                className={css.avatarImage}
                src={friend.avatar}
                alt={friend.name}
              />
            </div>
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
