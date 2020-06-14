// {
//     type: '',
//     payload:
// }

const INITIAL_STATE = {
    headerTabs: {
        overview: false,
        timesheet: false,
        activity: false,
        host: false
    }

}

const headerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'HIGHTLIGHT_HEADER_TAB':
            return {
                ...state,
                headerTabs: action.payload.headerTabs
            }

        default: 
            return state;
    }
}

export default headerReducer;