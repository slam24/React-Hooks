import './App.css';
import Init from './Init';
import HReducer from './HReducer';
import HCallback from './HCallback';

function App() {
  return (
    <div className="App">
      <Init/>
      <hr />
      <HReducer/>
      <hr />
      <HCallback/>
    </div>
  );
}
export default App;
