import data from './user.json';

// import clsx from 'clsx';
import css from './Profile.module.css';

//Profile React component
const Profile = () => {
    const { username, tag, location, avatar, stats } = data;
    return <div className= {css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}

export default Profile;