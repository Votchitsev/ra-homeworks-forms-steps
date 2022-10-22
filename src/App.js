import { useState } from 'react'; 
import './App.css';
import Form from './components/Form/Form'
import StepsLine from './components/StepsLine/StepsLine';

function App() {

  let [steps, setSteps] = useState([]);

  const addStep = (date, distance, isDelete, deleteItem) => {
    if (isDelete) {
      setSteps(
        steps = [...steps.slice(0, deleteItem), ...steps.slice(deleteItem + 1)]
      )
      return;
    }
    setSteps(steps = [...steps, {
      date: date.current.value,
      distance: distance.current.value,
    }])
  }

  return (
    <div className="App">
      <Form setSteps={setSteps} addStep={addStep}/>
      <StepsLine steps={ steps } addStep={addStep} />
    </div>
  );
}

export default App;
