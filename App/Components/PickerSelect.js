import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Picker } from 'react-native'
import styles from './Styles/PickerSelectStyle'

export default class PickerSelect extends Component {
  static propTypes = {
    pickerOptions: PropTypes.array.isRequired
  }
  
  static defaultProps = {
    pickerOptions: []
  }

  state = {
    selectedItem: ' '
  }

  render () {
    let pickerOptions = [' '].concat(this.props.pickerOptions);
    let pickerItems = pickerOptions.map( (label, index) => {
      return <Picker.Item label={label} value={label} key={index}/>
    })

    return (
        <Picker
          selectedValue={this.state.selectedItem}
          onValueChange={(value, index) => this.setState({selectedItem: value})}
          >
          {pickerItems}
        </Picker>
    )
  }
}
