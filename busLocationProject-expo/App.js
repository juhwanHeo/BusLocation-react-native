import {StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from "./Components/Screens/MainScreen";

/*
* https://velog.io/@anpigon/React-Native-UI-%EB%A7%8C%EB%93%A4%EA%B8%B0-1
* setting
* */
const AppStackNavigator = createStackNavigator({
    Main : {
        screen: MainScreen
    }
})

export default createAppContainer(AppStackNavigator);

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>Open up App.js to start working on your app!</Text>
//             <StatusBar style="auto"/>
//         </View>
//     );
// }
