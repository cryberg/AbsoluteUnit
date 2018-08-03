import { StackNavigator } from 'react-navigation'
import SandboxScreen from '../Containers/SandboxScreen'
import MeasurementsScreen from '../Containers/MeasurementsScreen'
// import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SandboxScreen: { screen: SandboxScreen },
  MeasurementsScreen: { screen: MeasurementsScreen },
  // LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'SandboxScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
