import {
	LOGIN_SUCCESS,
	LOGIN_CHANGE_FORM
} from '../actions/login';
import _ from 'lodash';
const initialState = {
	email: null,
	password: null
};
export default function (state = initialState, action) {
	switch (action.type) {
	case LOGIN_SUCCESS:
		return state;
	case LOGIN_CHANGE_FORM:
		state =  _.extend({}, state, _.pick(action, [
			'email',
			'password'
		]));
		return state;
	default:
		return state;
	}
}