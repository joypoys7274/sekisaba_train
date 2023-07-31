import logo from './logo.svg';
import './App.css';
import DayCounter from './DayCounter';

function App() {
  return (
    <div className="App">
      <h1>関鯖wiki</h1>

      <DayCounter />

      <ul>
        <li><a href="http://sekisaba.mydns.jp:8123/">map</a></li>
        <li><a href="#">mod一覧ページ(準備中)</a></li>
        <li><a href="#">駅探ナビ(準備中)</a></li>
      </ul>

    </div>
  );
}

export default App;
