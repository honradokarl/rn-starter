import React from 'react'; // how to make different components together
import {Text, StyleSheet, View} from 'react-native'; // knows how to take the information from those component

const ComponentScreen = function () {

    const name = 'Karl John Honrado';
    const greeting = `My Name Is ${name}`;
    const greetingJSX = <Text>Hello to you!</Text>

    return <View>
        <Text style={styles.textStyle}>Getting Started With React Native</Text>
        <Text style={styles.subHeaderStyle}>{ greeting }</Text>
        {greetingJSX}
    </View>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;