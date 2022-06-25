import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux";
import { addService, cancelChange } from "./redux/actionCreators";

const MainApp = () => {
    const estimate = useSelector((state)=> state.estimateReducer);
    const [inputName, setInputName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [visibility, setVisibility] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setInputName(estimate.form.name);
        setInputValue(estimate.form.value);
        setVisibility(estimate.visibility)
    }, [estimate.form.name, estimate.form.value, estimate.visibility])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addService(inputName, inputValue));
        setInputName('');
        setInputValue('');
    }

    const cancel = (e) =>{
        e.preventDefault();
        dispatch(cancelChange());  
    }
    return(
        <div className="form-buttons">
        <form className="form" onSubmit={submitHandler}>
            <div>
                <input type = 'text' required value={inputName} onChange={(e) => setInputName(e.target.value)}/>
            </div>
            <div>
                <input type = 'number' required value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <div>
                <button className="save">Save</button>
            </div>
        </form>
        <button className="cancel-form" style={{visibility: `${visibility}`}} onClick={(e)=> cancel(e)}>Cancel</button>
        </div>
    )
}

export default MainApp;