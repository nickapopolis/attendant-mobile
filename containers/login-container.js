import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Text,
	View,
	Image,
	StyleSheet,
	TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import { loginClick, loginChangeForm } from '../actions/login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-material-design-styles';
import FormTextField from '../components/form-text-field';

class LoginView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Icon name="automobile" size={75} style={styles.logo} />
					<Image source={require('../images/attendant.png')} />
				</View>
				<View style={styles.loginFormContainer}>
					<FormTextField
						field='email'
						caption="E-mail"
						value={this.props.email}
						fieldChanged={this.props.loginChangeForm.bind(this)}/>
					<FormTextField
						field='password'
						caption="Password"
						value={this.props.password}
						fieldChanged={this.props.loginChangeForm.bind(this)}
						password={true}/>
					<TouchableHighlight
						style={styles.signIn}
						onPress={this.props.onLoginClick.bind(this)}>
						<Text style={styles.signInText}>Submit</Text>
					</TouchableHighlight>
					<Text style={styles.text}>Sign up here</Text>
				</View>
			</View>);
	}
}
var primary = '#424b5c';
var secondary = '#8ddb52';
const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: primary,
		flex: 1,
		flexDirection: 'column'
	},
	titleContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginFormContainer: {
		flex: 1
	},
	text: {
		marginBottom: 10,
		color: color.paperGrey50.color
	},
	signIn: {
		marginTop: 10,
		backgroundColor: secondary,
		borderColor: secondary,
		borderRadius: 2,
		maxHeight: 40,
		flex: 1,
		paddingTop: 10,
		paddingLeft: 30,
		marginBottom: 10

	},
	signInText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15
	},
	logo: {
		color: secondary,
		textAlign: 'center'
	}
});
LoginView.propTypes = {
	dispatch: PropTypes.func,
	email: PropTypes.string,
	password: PropTypes.string,
	onLoginClick: PropTypes.func,
	passwordChanged: PropTypes.func,
	loginChangeForm: PropTypes.func
};

LoginView.displayName = 'LoginView';

const mapStateToProps = (state) => {
	return {
		email: state.login.email,
		password: state.login.password
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginChangeForm: (change) => {
			dispatch(loginChangeForm(change));
		},
		onLoginClick: function(){
			dispatch(loginClick(this.props.email, this.props.password));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);