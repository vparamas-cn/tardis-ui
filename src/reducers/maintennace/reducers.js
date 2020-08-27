const initialState = {
    isLoading: false,
    data: [],
    filterData: [],
    filter: {},
    page: 1,
    size: 5,
    totalPage: 1,
    totalElements: 0,
    pageBound: { current: 1, upperbound: 1, lowerbound: 0 },
    updatecount: 0
}

const maintennaceReducer = (state = initialState, action) => {

    switch (action.type) {
        default: return state;
    }

}

export default maintennaceReducer;