import user from './path/to/user.json';
import data from './path/to/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

console.log(user);
console.log(data[0]);

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
