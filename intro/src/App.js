import './App.css';
import MainApp from './MainApp';
import { useSelector, useDispatch } from 'react-redux';
import { addItemForm, deleteItem } from './redux/actionCreators';
import { useState, useEffect } from 'react';
import { ReactComponent as EditButton } from './edit.svg'
import { ReactComponent as CancelButton } from './cancel.svg'


function App() {
  const estimate = useSelector((state)=> state.estimateReducer.filterList);
  const stateGeneral = useSelector((state)=> state.estimateReducer);
  const [visibilityList, setVisibility] = useState('');
 console.log(stateGeneral.visibilityList);
  useEffect(() => {
    setVisibility(stateGeneral.visibilityList)
}, [stateGeneral.visibilityList])

  const dispatch = useDispatch();

    const editItem = (name, value, id, e) => {
        dispatch(addItemForm(name, value, id))
    }
  

  const removeItem=(id, e)=>{
    dispatch(deleteItem(id))
  }
  
  const list = estimate.map((item) =>
  <li key = {item.id} className='item'>
    <div className='content'>
<div>{item.name} {item.value}</div> 
    <div className='options'>
    <EditButton onClick={(e)=> editItem(item.name, item.value, item.id, e)}/> 
    <CancelButton onClick={(e)=> removeItem(item.id, e)}/>
    </div>
    </div>
  </li>
  )
  return (
    <>
    <MainApp/>
    <ul className='list' style={{visibility: `${visibilityList}`}}>
    {list}
    </ul>
    </>
  );
}

export default App;
