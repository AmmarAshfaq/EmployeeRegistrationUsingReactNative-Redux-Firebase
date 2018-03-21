import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from "../actions/types"


const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === {prop ="name",value="ammar"
            // called key interpolation
            //es6 sentex
            //with out es6 u do this
            // const newState = {}
            //newState[action.payload.prop] =   action.payload.value
            return {...state, [action.payload.prop]: action.payload.value}
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}
