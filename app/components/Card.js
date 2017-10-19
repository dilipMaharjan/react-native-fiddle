import React, { Component } from 'react';
import { Text, Button, Alert, View } from "react-native";

export default class Card extends Component {
    render() {
        return (
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ marginRight: 30 }}>{this.props.text}</Text>
                <Button onPress={() => { Alert.alert("Hey Stop tapping me") }} title={"Tap me"} />
            </View>
        );
    }
}