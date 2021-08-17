import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = props => {
    console.log(props);
    return <View>
        <ImageDetail
            title="Forest"
            imageSource={require('../../assets/forest.jpg')}
            score={9}
        />
        <ImageDetail
            title="Beach"
            imageSource={require('../../assets/beach.jpg')}
            score={6}
        />
        <ImageDetail
            title="Mountain"
            imageSource={require('../../assets/mountain.jpg')}
            score={8}
        />
    </View>
}

const style = StyleSheet.create({});

export default ImageScreen