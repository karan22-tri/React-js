import './App.css';
import {Context} from './Component/Context';
import Counter from './Component/Counter';

function App() {
  return (
   <>
  <Context>
    <Counter/>
  </Context>
   </>
   
  )
}

export default App;
