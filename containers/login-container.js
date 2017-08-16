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
import { loginClick, passwordChanged, loginChangeForm } from '../actions/login';
import { MKTextField } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { color } from 'react-native-material-design-styles';
class LoginView extends Component {
	render() {
		
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Icon name="automobile" size={75} style={styles.logo} />
					<Image source={require('./attendant.png')} />
				</View>
				<View style={styles.loginFormContainer}>
					<MKTextField
						tintColor={color.paperGrey50.color}
						textInputStyle={{ color: color.paperGrey50.color }}
						placeholder='Username'
						underlineSize={1}
						text={'hi'}
						name="username"
						value={this.props.user.username}
						onChange={this.props.loginChangeForm.bind(this)}
						placeholderTextColor={color.paperGrey300.color}
					></MKTextField>
					<MKTextField
						placeholderTextColor={color.paperGrey300.color}
						tintColor={color.paperGrey50.color}
						textInputStyle={{ color: color.paperGrey50.color }}
						underlineSize={1}
						secureTextEntry={true}
						name="password"
						value={this.props.user.password}
						onChange={this.props.loginChangeForm.bind(this)}
						placeholder='Password'
					/>
					<TouchableHighlight
						style={styles.signIn}
						onPress={ this.props.onLoginClick.bind(this)}>
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
	textField: {
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
	},
	title: {
		fontSize: 50,
		width: 100,
		color: secondary,
		textAlign: 'center'
	}
});
LoginView.propTypes = {
	dispatch: PropTypes.func,
	user: PropTypes.object,
	onLoginClick: PropTypes.func,
	passwordChanged: PropTypes.func,
	loginChangeForm: PropTypes.func
};

LoginView.displayName = 'LoginView';

const mapStateToProps = (state) => {
	return {
		user: state.login.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginChangeForm: (event) => {
			dispatch(loginChangeForm({
				[event.target.name]: event.target.value 
			}));
		},
		onLoginClick: () => {
			dispatch(loginClick(this.state.name, this.state.password));
			Actions.tabbar();
		},
		passwordChanged: (identity, password) => {
			return dispatch(passwordChanged(identity, password));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);