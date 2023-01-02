/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import DesignStyle from './Design/DesignStyle';
//import FixedDimensionsBasics from './Design/FixedDimensionsBasics';
//import FlexDirectionBasics from './Design/Flexbox';
//import PositionLayout from './Design/FlexPosition';
//import FlatListBasics from './Design/FlatListBasics';
//import SectionListBasics from './Design/SectionListBasics';
import FlatListDesign from './CustomUI/FlatListDesign';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => DesignStyle);
//AppRegistry.registerComponent(appName, () => FixedDimensionsBasics);
//AppRegistry.registerComponent(appName, () => FlexDirectionBasics);
//AppRegistry.registerComponent(appName, () => PositionLayout);
//AppRegistry.registerComponent(appName, () => FlatListBasics);
//AppRegistry.registerComponent(appName, () => SectionListBasics);
AppRegistry.registerComponent(appName, () => FlatListDesign);
