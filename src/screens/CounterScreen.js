import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    if (action.type === 'increase') {
        return { ...state, counter: state.counter + 1 }
    } else if (action.type === 'decrease') {
        return { ...state, counter: state.counter - 1 }
    }
}

const CounterScreen = () => {
    // todo: fix this
    // this is what we called an array of destructuring
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;

    return <View>
        <Button
            title="Increase"
            onPress={() => dispatch({ type: 'increase' })}
        />
        <Button
            title="Decrease"
            onPress={() => dispatch({ type: 'decrease' })}
        />
        <Text>Current count: { counter } </Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;
