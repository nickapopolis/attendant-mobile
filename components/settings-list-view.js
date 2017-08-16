import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	View,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SettingsItems} from '../config/settings-items';

export default class SettingsListView extends Component {
	render() {
		return (
			<ScrollView>
				{SettingsItems.map((item) => (
					<View style={styles.listRow} key={item.name}>
						<Icon name={item.iconName} size={25}  />
						<Text style={styles.listRowText} >{item.name}</Text>
					</View>)) }
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({

	listRow: {
		flex: 1,
		flexDirection: 'row',
		margin: 15
	},
	listRowText: {
		marginTop: 5,
		marginLeft: 15
	}
});