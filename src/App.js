import { useState } from 'react'; 
import './App.css';
import Form from './components/Form/Form'
import StepsLine from './components/StepsLine/StepsLine';

function App() {

  let [steps, setSteps] = useState([]);

  const changeStepsLine = (date, distance, isDelete, deleteItem) => {
    if (isDelete) {
      setSteps(
        steps = [...steps.slice(0, deleteItem), ...steps.slice(deleteItem + 1)]
      )
      return;
    }

    const existsDate = steps.find(step => step.date === date.current.value);
    const existsDateIndex = steps.indexOf(existsDate);

    if (existsDate) {
      existsDate.distance += Number(distance.current.value);

      setSteps(
        () => {
          delete steps[existsDateIndex]
          steps[existsDateIndex] = existsDate
          return [...steps];
        }
      )

      return;
    }

    setSteps(
      steps = [...steps, {
        date: date.current.value,
        distance: Number(distance.current.value),
      }]
    )
  }

  return (
    <div className="App">
      <Form setSteps={setSteps} addStep={changeStepsLine}/>
      <StepsLine steps={ steps } addStep={changeStepsLine} />
    </div>
  );
}

export default App;
