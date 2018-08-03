import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PickerSelect from '../Components/PickerSelect'
import convert from '../Lib/convert-units/UnitConverter'

let lengthPossibilities = convert().possibilities('length');
let massPossibilities = convert().possibilities('mass');

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SandboxScreenStyle'

class SandboxScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>SandboxScreen</Text>
        </KeyboardAvoidingView>
        <PickerSelect pickerOptions={lengthPossibilities}/>
        <PickerSelect pickerOptions={massPossibilities}/>

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SandboxScreen)
