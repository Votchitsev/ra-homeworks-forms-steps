import './StepsItem.css';


function StepsItem({ date, distance, deleteItem }) {
  return (
    <div className='steps_item'>
      <div className='steps_item__date'>{ date }</div>
      <div className='steps_item__distance'>{ distance }</div>
      <button className='steps_item__delete' onClick={deleteItem}></button>
    </div>
  )
}

export default StepsItem;
