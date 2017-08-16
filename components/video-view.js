import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';

export default class VideoView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Entity
				</Text>
			</View>);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10
	},
	welcome: {
		fontSize: 30
	},
});