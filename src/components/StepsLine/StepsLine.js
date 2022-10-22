import './StepsLine.css';
import StepsItem from '../StepsItem/StepsItem';

function StepsLine({ steps, addStep: changeStepsList }) {
  return <div className="steps_line">
    { steps.map(
      (step, index) => <StepsItem 
      date={ step.date } 
      distance={ step.distance } 
      deleteItem={ () => changeStepsList(null, null, true, index) } key={ index } />
      ) }
  </div>
}

export default StepsLine;
