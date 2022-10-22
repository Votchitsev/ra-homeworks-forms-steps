import { useRef } from 'react';
import './Form.css';

function Form( { addStep }) {

  const date = useRef();
  const distance = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addStep(date, distance);
    date.current.value = '';
    distance.current.value = '';
};

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="date" className="input_date input" ref={date} placeholder='ДД.ММ.ГГГГ' />
      <input type="text" className="input_distance input" ref={distance} placeholder='КМ' />
      <input type="submit" value={'OK'} />
    </form>
  )
}

export default Form;
