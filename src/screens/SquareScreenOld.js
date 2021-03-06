import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreenOld = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        /*if (color === 'red') {
            if (red + change > 255 || red + change < 0) {
                return;
            } else {
                setRed(red + change);
            }
        }*/
        switch (color) {
            case 'red':
                (red + change > 255 || red + change < 0)
                    ? null
                    : setRed(red + change);
                break;
            case 'blue':
                (blue + change > 255 || blue + change < 0)
                    ? null
                    : setBlue(blue + change);
                break;
            case 'green':
                (green + change > 255 || green + change < 0)
                    ? null
                    : setGreen(green + change);
                break;
            default:
                break;
        }
    }

    return <View>
        <ColorCounter
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color="Red"
        />
        <ColorCounter
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', COLOR_INCREMENT)}
            color="Blue"
        />
        <ColorCounter
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', COLOR_INCREMENT)}
            color="Green"
        />
        <View
            style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>
        </View>
    </View>
}

const styles = StyleSheet.create({});

export default SquareScreenOld;