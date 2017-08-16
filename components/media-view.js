import React from 'react';
import { connect } from 'react-redux';
import {
	Text,
	StyleSheet,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import {MediaTabs} from '../config/media-tabs';
import { mediaTabClick } from '../actions/media';
import TabNavigator from 'react-native-tab-navigator';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	contentContainer: {
		backgroundColor: 'lightgrey'
	}
});
const MediaView = (props) => {
	return (
		<View style={styles.container}>
			<TabNavigator
				tabBarStyle={styles.tabNavigatorBar}
				sceneStyle={styles.tabNavigatorScene}>{
					MediaTabs.map((tab) => (
						<TabNavigator.Item
							selected={props.selectedMediaTab === tab.name}
							title={tab.name}
							key={tab.name}
							onPress={()=>{props.onMediaTabSelected(tab.name);}}>{
								<Text>{tab.name}</Text>
							}
						
						</TabNavigator.Item>
					))}
			</TabNavigator>
		</View>
	);
};
MediaView.propTypes = {
	selectedMediaTab: PropTypes.string,
	onMediaTabSelected: PropTypes.func.isRequired
};
MediaView.displayName = 'MediaView';
const mapStateToProps = (state) => {
	return {
		selectedMediaTab: state.navigation.selectedMediaTab
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onMediaTabSelected: (tabName) => {
			return dispatch(mediaTabClick(tabName));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaView);