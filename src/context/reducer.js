import {APP_STATE, INITIAL_STATE} from '../constants';

export function stateReducer(state, action) {
    switch(action.type) {
        case APP_STATE.setTotalData:
            return {
                ...state,
                totalData:action.totalData,
                errorMessage:INITIAL_STATE.errorMessage
            };
        case APP_STATE.setMainData:
            return {
                ...state,
                mainDataTitle: action.mainDataTitle,
                mainData:action.mainData,
                subData:null,
                errorMessage:INITIAL_STATE.errorMessage,
            };
        case APP_STATE.setSubData:
            return {
                ...state,
                subData:action.subData,
                errorMessage:INITIAL_STATE.errorMessage,
            };
        case APP_STATE.setErrorState:
            return {
                ...INITIAL_STATE,
                errorMessage: action.errorMessage
            }
        default:
            return INITIAL_STATE;
    }
}