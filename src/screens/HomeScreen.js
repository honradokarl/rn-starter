import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

//const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  //console.log(navigation);
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to components demo"
    />
    <Button
        title="Go to list demo"
        onPress={() => navigation.navigate('List')}
    />
    <Button
        title={"Go to the image demo"}
        onPress={() => navigation.navigate('Image')}
    />
    <Button
        title={"Go to the counter demo"}
        onPress={() => navigation.navigate('Counter')}
    />
    <Button
        title={"Go to the color demo"}
        onPress={() => navigation.navigate('Color')}
    />
    <Button
        title={"Go to the square demo"}
        onPress={() => navigation.navigate('Square')}
    />
    <Button
        title={"Go to the text demo"}
        onPress={() => navigation.navigate('Text')}
    />
    {/*<TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to list demo</Text>
      <Text>Go to list demo</Text>
      <Text>Go to list demo</Text>
    </TouchableOpacity>*/}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
