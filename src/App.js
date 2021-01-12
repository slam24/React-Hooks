import './App.css';
import Init from './Init';
import HReducer from './HReducer';
import HCallback from './HCallback';
import HMemo from './HMemo';

function App() {
  return (
    <div className="App">
      <Init/>
      <hr />
      <HReducer/>
      <hr />
      <HCallback/>
      <hr />
      <HMemo/>
    </div>
  );
}
export default App;
