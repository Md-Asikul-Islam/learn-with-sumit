import './App.css';
import Clocklist from './Conditional_Rendering_list_keys/ClockList';

function App() {
  const quantites = [1, 2, 3] ;

  return (
    <div className="App">
      <Clocklist quantities={quantites}/>
    </div>
  );
}

export default App;

