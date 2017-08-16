import {
	LOGIN_SUCCESS,
	LOGIN_CHANGE_FORM
} from '../actions/login';
import _ from 'lodash';
const initialState = {
	sessionId: null,
	user: {}
};
export default function (state = initialState, action) {
	switch (action.type) {
	case LOGIN_SUCCESS:
		return state;
		//return _.extend(state, action);
	case LOGIN_CHANGE_FORM:
		return _.extend(state.user, state.user || {}, action);
	default:
		return state;
	}
}