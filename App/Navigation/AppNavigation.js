import { StackNavigator } from 'react-navigation'
import MeasurementsScreen from '../Containers/MeasurementsScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MeasurementsScreen: { screen: MeasurementsScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'MeasurementsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
