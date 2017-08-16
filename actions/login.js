import _ from 'lodash';
export const LOGIN_CHANGE_FORM = 'LOGIN_CHANGE_FORM';
export function loginChangeForm(change) {
	return _.extend({
		type: LOGIN_CHANGE_FORM
	},
	change
	);
}
export const LOGIN_CLICK = 'LOGIN_CLICK';
export function loginClick(name, password) {
	return (dispatch) => {
		setTimeout(function () {
			var sessionMock = '12345';
			dispatch(loginSuccess(name, sessionMock));
		}, 100);
	};
}
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(name, session) {
	return {
		type: LOGIN_SUCCESS,
		name,
		session
	};
}
export const LOGIN_PASSWORD_CHANGED = 'LOGIN_PASSWORD_CHANGED';
export function loginPasswordChanged(name, password) {
	return {
		type: LOGIN_PASSWORD_CHANGED,
		name,
		password
	};
}