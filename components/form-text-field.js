import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MKTextField } from 'react-native-material-kit';
import { color } from 'react-native-material-design-styles';
class FormTextField extends Component {
	render() {
		return <MKTextField
			tintColor={color.paperGrey50.color}
			textInputStyle={{ color: color.paperGrey50.color }}
			placeholder={this.props.caption}
			underlineSize={1}
			name={this.props.field}
			value={this.props.value}
			onChangeText={(value)=>{
				this.props.fieldChanged({
					[this.props.field]: value
				});
			}}
			placeholderTextColor={color.paperGrey300.color}
			password={this.props.password}
		></MKTextField>;
	}
}
FormTextField.propTypes = {
	field: PropTypes.string,
	value: PropTypes.string,
	caption: PropTypes.string,
	password: PropTypes.bool,
	fieldChanged: PropTypes.func
};
module.exports = FormTextField;