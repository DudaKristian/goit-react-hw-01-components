import Profile from "./Profile/Profile"
import user from "./Profile/user.json"
import mainStyle  from "./mainStyle.module.css"

export const App = () => {
  return (
    <div className={mainStyle.containerStyle}> 
      
      <Profile 
      stats={user.stats}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      />
    </div>
  );
};

