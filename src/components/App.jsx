import { Profile } from 'components/profile/Profile';
import { StatisticTitle } from 'components/statistic/StatisticTitle';
import { Statistics } from 'components/statistic/Statistics';
import { FriendList } from 'components/friends/FriendList';
import user from './to/user.json';
import data from './to/data.json';
import friends from './to/friends.json';

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
      <StatisticTitle title="UPLOAD STATS">
        <Statistics stats={data} />
      </StatisticTitle>
      <FriendList friends={friends} />
    </div>
  );
};
