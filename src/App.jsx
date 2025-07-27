import "./App.css";
import Profile from "./Profile";
import Statistics from "./Statistics";
import user from "./user.json";
import data from "./data.json";
import FriendList from "./FriendList";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./TransactionHistory";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
