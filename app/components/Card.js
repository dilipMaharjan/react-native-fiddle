import React, { Component } from 'react';
import { Text } from "react-native";

export default class Card extends Component {
    render() {
        return (
            <Text>{this.props.text}</Text>
        );
    }
}