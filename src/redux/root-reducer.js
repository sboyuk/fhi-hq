import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import headerReducer from './header/header.reducer'
import userReducer from './user/user.reducer'
import timesheetReducer from './timesheet/timesheet.reducer';
import activityReducer from './activity/activity.reducer';
import hostReducer from './host/host.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    header: headerReducer,
    user: userReducer,
    timesheet: timesheetReducer,
    activity: activityReducer,
    host: hostReducer
})

export default persistReducer(persistConfig, rootReducer);