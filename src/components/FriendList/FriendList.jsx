import data from './friends.json';
import css from './FriendList.module.css';

const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {data.map(friend => {
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

export default FriendList;
