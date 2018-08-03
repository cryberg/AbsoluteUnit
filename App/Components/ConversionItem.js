import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput, Button, Text } from 'react-native'
import styles from './Styles/ConversionItemStyle'
import convert from '../Lib/convert-units/UnitConverter'

export default class ConversionItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  
  // // Defaults for props
  static defaultProps = {
    //using Props like this to set initial state is probably an anti-pattern.
    //Redux to the rescue?
    initialSettings: {
      initialUnitA: 'mi',
      initialUnitB: 'km',
      initialValueA: 1
    }
  }

  state = {
    unitA: this.props.initialSettings.initialUnitA,
    unitB: this.props.initialSettings.initialUnitB,
    unitAValue: this.props.initialSettings.initialValueA,
    unitBValue: convert(this.props.initialSettings.initialValueA).from(this.props.initialSettings.initialUnitA).to(this.props.initialSettings.initialUnitB)
  }

  convertFromAToB = (inputAValue) => {
    this.setState({ unitAValue: inputAValue });
    let newVal = convert(inputAValue).from(this.state.unitA).to(this.state.unitB);
    this.setState({ unitBValue: newVal })
  }

  convertFromBtoA = (inputBValue) => {
    this.setState({ unitBValue: inputBValue });
    let newVal = convert(inputBValue).from(this.state.unitB).to(this.state.unitA);
    this.setState({ unitAValue: newVal })
  }

  render () {
    let test = "bla";

    return (
      <View style={styles.container}>
        <TextInput 
          style = {{backgroundColor: '#e6e6e6', borderWidth: 1, width: 75}} //move these styles out 
          defaultValue = "1"
          value= {`${this.state.unitAValue}`}
          keyboardType = 'numeric'
          onChangeText = {this.convertFromAToB}
          ref = "inputA"
        />
        <Button 
          title = {this.state.unitA}
          onPress = {() => console.log('unitA')}
        />
        <TextInput 
          style = {{backgroundColor: '#e6e6e6', borderWidth: 1, width: 75}} //move these styles out 
          value= {`${this.state.unitBValue}`}
          keyboardType = 'numeric'
          onChangeText = {this.convertFromBtoA}
          ref = "inputB"
        />
        <Button 
          title = {this.state.unitB}
          onPress = {() => console.log('unitB')}
        />
        <Text>{this.state.unitAValue}</Text>
        <Text>{this.state.unitBValue}</Text>
      </View>
    )
  }
}
