import { ADD_ITEM_TO_FORM, ADD_ITEM, CANCEL_CHANGE, DELETE_ITEM, FILTER_SEARCH, FOCUS_INPUT } from "./actions";
import { nanoid } from 'nanoid'; 

 const intialState = {
    list: [{id: 'jij9', name: "Замена стекла", value: '21000'}, 
    {id: 'gd9l9', name: "Замена дисплея", value: '25000'}, 
    {id: 'kji6', name: "Замена аккумулятора", value: '4000'}, 
    {id: 'cgy7', name: "Замена микрофона", value: '2500'}],
    filterList: [],
    form: {name: '', value: '', id: ''},
    visibility: 'hidden',
    visibilityList: 'hidden'
 }
 
 const estimateReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const {name, value} = action.payload;
            if(state.list.find(item=>item.id === state.form.id)){
                   const arr = state.list.map((item) =>{
                      if(item.id === state.form.id) {
                        return {id: state.form.id, name, value: Number(value)}
                      } else return item
                   }) 
                  return {
                    list: arr,
                    filterList: state.filterList,
                    form: {name: '', value: ''},
                    visibility: 'hidden',
                    visibilityList: 'visible'
                  } 
            } else
            return {
                list: [...state.list, {id: nanoid(), name, value: Number(value)}],
                filterList: state.filterList,
                form: {name: '', value: ''},
                visibility: 'hidden',
                visibilityList: 'visible'
            } 
        case ADD_ITEM_TO_FORM:
            const {name: nameForm, value: valueForm, id} = action.payload;
            return {
                list: [...state.list],
                filterList: state.filterList,
                form: {name: nameForm, value: valueForm, id},
                visibility: 'visible',
                visibilityList: 'visible'
            } 
        case CANCEL_CHANGE:
         const clearForm = action.payload;
         return {
                list: [...state.list],
                filterList: state.filterList,
                form: {name: clearForm, value: clearForm, id: clearForm},
                visibility: 'hidden',
                visibilityList: 'hidden'

         }  
        case DELETE_ITEM:
            const deleteID = action.payload;
            const arr = state.list.filter((item) =>item.id !== deleteID);
            const arrFilter = state.filterList.filter((item)=>item.id !== deleteID);
            if(state.form.id === deleteID) {
              return {
                    list: arr,
                    filterList: arrFilter,
                    form: {name: '', value: '', id: ''},
                    visibility: 'hidden',
                    visibilityList: 'visible'
             }     
            } else {
                return {
                    list: arr,
                    filterList: arrFilter,
                    form: {name: state.form.name, value: state.form.value, id: state.form.id},
                    visibility: state.visibility,
                    visibilityList: 'visible'
                }
                
            }
        case FOCUS_INPUT:
             return{
                list: [...state.list],
                filterList: [...state.list],
                form: {name: state.form.name, value: state.form.value, id: state.form.id},
                visibility: state.visibility,
                visibilityList: 'visible'
            }       
        case FILTER_SEARCH:
            let inputValue=action.payload;
            inputValue = inputValue.toUpperCase();
            const filterList = state.list.filter((item)=> item.name.toUpperCase().includes(inputValue));
            return {
                list: [...state.list],
                filterList: filterList,
                form: {name: state.form.name, value: state.form.value, id: state.form.id},
                visibility: state.visibility,
                visibilityList: 'visible'
            }

        default: return state;    
    }
    
}

export default estimateReducer