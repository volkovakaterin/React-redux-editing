
import { ADD_ITEM_TO_FORM, ADD_ITEM, CANCEL_CHANGE, DELETE_ITEM  } from "./actions";

export function addService(name, value) {
    return {type: ADD_ITEM, payload: {name, value}};
}

export function addItemForm(name, value, id) {
    return {type: ADD_ITEM_TO_FORM, payload: {name, value, id}};
}

export function cancelChange() {
    return {type: CANCEL_CHANGE, payload: ''}
}

export function deleteItem(id) {
    return {type: DELETE_ITEM, payload: id}
}