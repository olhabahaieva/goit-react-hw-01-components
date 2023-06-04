import data from './friends.json';
import css from './FriendList.module.css';

const FriendList = () => {
   return <ul className={css.friendList}>
   {data.map((friend) => (
    <li className={css.friendElement} key={friend.id}>
        <div className={css.isOnline}></div>
        <img className={css.avatar} src={friend.avatar} alt={friend.name}/>
        <h2>{friend.name}</h2>
    </li>
   ))}
 </ul>
   
}

export default FriendList;