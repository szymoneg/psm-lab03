import React from 'react';
// import {TouchableOpacity} from "react-native-web";
import {StyleSheet, Text,TouchableOpacity,Dimensions} from "react-native";

export default class Button extends React.Component {
    render(props) {
        const {double,fun} = this.props;
        return (
            <TouchableOpacity ref="rootView" style={[
                styles.btn,
                double ? styles.double : ''
            ]} onPress={fun}>
                <Text style={styles.btnText}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
        shide: {
            display: 'none',
        },
        double: {
            fontSize: 32,
            color:'white',
            flex: 2,
            flexBasis: 4
        },
        btnText:{
            fontSize: 32,
            color:'white',
        },
        btn:{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            alignSelf: 'stretch',
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderColor:"#1C1C1C",
        },
    }
)
