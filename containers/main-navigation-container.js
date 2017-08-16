import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, StyleSheet, NavigationDrawer } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Scene, Router, Reducer } from 'react-native-router-flux';
import LoginView from '../containers/login-container';
import MediaView from '../components/media-view';
import SettingsView from '../components/settings-view';
import { color } from 'react-native-material-design-styles';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
		flexDirection: 'column'
	},
	tab: {

	},
	tabIcon: {

	},
	tabText: {
		fontSize: 10
	},
	tabBarStyle: {
		borderColor: 'black',
		backgroundColor: 'white'
	},
	tabBarSelectedItemStyle: {
		borderTopWidth: 5,
		borderColor: color.googleBlue500.color
	},
	navigationBar: {
		backgroundColor: color.googleBlue500.color
	}
});
const TabIcon = (props) => (
	<View style={styles.tab}>
		<Icon size={25} style={styles.tabIcon} name={props.iconName} />
		<Text
			style={styles.tabText}>
			{props.title}
		</Text>
	</View>
);
TabIcon.propTypes = {
	iconName: PropTypes.string,
	title: PropTypes.string
};
class MainNavigationBar extends Component {
	reducerCreate(params) {
		const defaultReducer = Reducer(params);
		return (state, action) => {
			this.props.dispatch(action);
			return defaultReducer(state, action);
		};
	}
	getSceneStyle() {
		const style = {
			flex: 1,
			backgroundColor: color.googleGrey100.color,
			shadowColor: null,
			shadowOffset: null,
			shadowOpacity: null,
			shadowRadius: null,
		};
		return style;
	}
	render() {
		return (
			<Router
				createReducer={this.reducerCreate.bind(this)}
				getSceneStyle={this.getSceneStyle.bind(this)}>
				<Scene key="root" navigationBarStyle={styles.navigationBar}>
					<Scene key="login" component={LoginView} hideTabBar hideNavBar>

					</Scene>
					<Scene key="tabbar" component={NavigationDrawer}>
						<Scene
							key="main"
							tabs
							tabBarStyle={styles.tabBarStyle}
							tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
							<Scene key="mediatab"
								title="Media"
								iconName="photo"
								icon={TabIcon}
								navigationBarStyle={styles.navigationBar}
								titleStyle={{ color: 'white' }}>
								<Scene tabTitle="Media" key="media" component={MediaView} title="Media" />
							</Scene>
							<Scene
								key="settingstab"
								title="Settings"
								iconName="gear"
								icon={TabIcon}
								navigationBarStyle={styles.navigationBar}
								titleStyle={{ color: 'white' }}
							>
								<Scene
									key="settings"
									component={SettingsView}
									title="Settings" />
							</Scene>
						</Scene>
					</Scene>
				</Scene>
			</Router>
		);
	}
}
MainNavigationBar.propTypes = {
	dispatch: PropTypes.func
};
MainNavigationBar.displayName = 'MainNavigationBar';

const mapStateToProps = (state) => {
	return {
		routes: state.routes
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigationBar);