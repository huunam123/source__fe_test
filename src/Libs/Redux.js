"use strict";

/* Package System */
import {createStore,applyMiddleware,combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

/* Application */
import Status from '@views/Default/Reducers/Status';
import User from '@views/Default/Reducers/User';
class Redux{

	initStore=()=>{
		return createStore(
			this.initReducer(),
			applyMiddleware(ReduxThunk)
		);
	}

	initReducer=asyncReducers=>{
		return combineReducers({
			status:Status,
			user:User,
			...asyncReducers
		});
	}
}

module.exports = new Redux;