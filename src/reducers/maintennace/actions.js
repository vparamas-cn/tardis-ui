export const MAINTENNACE_LIST_REQUEST= "MAINTENNACE_LIST_REQUEST";
export const MAINTENNACE_LIST_SUCCESS= "MAINTENNACE_LIST_SUCCESS";
export const MAINTENNACE_LIST_FAILURE= "MAINTENNACE_LIST_FAILURE";
export const ADD_MAINTENNACE_REQUEST= "ADD_MAINTENNACE_REQUEST";
export const ADD_MAINTENNACE_SUCCESS= "ADD_MAINTENNACE_SUCCESS";
export const ADD_MAINTENNACE_FAILURE= "ADD_MAINTENNACE_FAILURE";

export const Maintennace_list_request = (data) =>{
    return {
        type: "MAINTENNACE_LIST_REQUEST",
        payroll: data
    }
}

export const Add_Maintennace = (data) =>{
    return {
        type: "ADD_MAINTENNACE_REQUEST",
        payroll: data
    }
}

