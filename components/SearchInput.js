
//Search component

import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class SearchInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = text => {
        //We need to do something with newLocation
        //this.props.location = newLocation;

        this.setState({ text });
        
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if(!text) return;

        onSubmit(text);
        this.setState({text: ''});
    };

    
    render(){
        const { placeholder } = this.props;
        const { text } = this.state;

        return(
                <View style={styles.container}>
                    <TextInput
                        autoCorrect = {false}
                        value={ text }
                        placeholder={ placeholder }
                        placeholderTextColor ="white"
                        underlineColorAndroid = "transparent"
                        style={styles.textInput}
                        clearButtonMode="always"
                        onChangeText = {this.handleChangeText}
                        onSubmitEditing={this.handleSubmitEditing}    
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40, 
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    TextInput: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        // arginHorizontal: 20,
        // paddingHOrizontal: 10,
        alignSelf: 'center',
      },
    
});