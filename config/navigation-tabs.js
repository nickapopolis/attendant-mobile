import MediaView from '../components/media-view';
import SettingsView from '../components/settings-view';
import React from 'react';
export const NavigationTabs = [
	{
		name: 'Media',
		iconName: 'photo',
		view: (<MediaView></MediaView>)
	},
	{
		name: 'Settings',
		iconName: 'gear',
		view: (<SettingsView></SettingsView>)
	}
];