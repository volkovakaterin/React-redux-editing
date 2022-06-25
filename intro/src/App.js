import './App.css';
import MainApp from './MainApp';
import { useSelector, useDispatch } from 'react-redux';
import { addItemForm, deleteItem } from './redux/actionCreators';


function App() {
  const estimate = useSelector((state)=> state.estimateReducer.list);

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
    <svg onClick={(e)=> editItem(item.name, item.value, item.id, e)} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 488.728 488.728" style={{enableBackground:"new 0 0 488.728 488.728", height: '21px'}} xmlSpace="preserve"><g>
	<path d="M487.147,462.52l-36.4-167.6c0-4.2-2.1-7.3-5.2-10.4l-261.3-261.3c-20-22.9-74.3-38.1-112.4,0l-47.9,47.9
		c-31,31-31,81.4,0,112.4l261.3,261.3c2.1,2.1,5.2,4.2,9.4,5.2l168.6,38.5C473.347,490.02,492.347,483.62,487.147,462.52z
		 M53.047,154.42c-15.6-15.6-15.6-39.6,0-55.2l47.9-47.9c15.2-15.2,40-15.2,55.2,0l238.4,238.4h-27.1c-11.4,0-20.8,9.4-20.8,20.8
		v34.3h-34.3c-11.4,0-20.8,9.4-20.8,20.8v26.1L53.047,154.42z M333.047,415.72v-29.2h34.3c18,1.7,20.8-16.5,20.8-20.8v-34.4h29.2
		l24,109.3L333.047,415.72z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
    
    <svg onClick={(e)=> removeItem(item.id, e)} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 47.095 47.095" style={{enableBackground: "new 0 0 47.095 47.095", height: '21px'}} xmlSpace="preserve"><g>
	<path d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21
		L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831
		c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0
		C47.673,42.282,47.672,38.54,45.363,36.234z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
    </div>
    </div>
  </li>
  )
  return (
    <>
    <MainApp/>
    <ul className='list'>
    {list}
    </ul>
    </>
  );
}

export default App;
