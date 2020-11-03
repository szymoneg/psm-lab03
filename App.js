import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from "./components/Button";

export default class MyLayout extends React.Component {
    constructor() {
        super();

        this.state = { orientation: 'portrait' }
    }

    getOrientation = () => {
        if( this.refs.rootView ) {
            if( Dimensions.get('window').width < Dimensions.get('window').height ) {
                this.setState({ orientation: 'portrait' });
            }
            else {
                this.setState({ orientation: 'landscape' });
            }
        }
    }

    componentDidMount() {
        this.getOrientation();

        Dimensions.addEventListener( 'change', () => {
            this.getOrientation();
        });
    }


    componentWillUnmount() {
        this.getOrientation();

        Dimensions.removeEventListener('change',()=>{
            this.getOrientation();
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>123</Text>
                </View>
                <View style={styles.buttons}>
                    <View ref = "rootView" style={[styles.operationLeft,
                        this.state.orientation==="portrait" ? styles.shide : '',
                        ]}>
                        <Button hide name="y√x"/>
                        <Button hide name="e×"/>
                        <Button hide name="ln"/>
                        <Button hide name="e"/>
                        <Button hide name="π"/>
                    </View>
                    <View style={[styles.operationLeft,
                        this.state.orientation==="portrait" ? styles.shide : '',]}>
                        <Button hide name="x!"/>
                        <Button hide name="10×"/>
                        <Button hide name="log"/>
                        <Button hide name="x²"/>
                        <Button hide name="x³"/>
                    </View>
                    <View style={styles.numbers}>
                        <View style={styles.row}>
                            <Button name="AC"/>
                            <Button double name=" "/>
                        </View>
                        <View style={styles.row}>
                            <Button name="7"/>
                            <Button name="8"/>
                            <Button name="9"/>
                        </View>
                        <View style={styles.row}>
                            <Button name="4"/>
                            <Button name="5"/>
                            <Button name="6"/>
                        </View>
                        <View style={styles.row}>
                            <Button name="1"/>
                            <Button name="2"/>
                            <Button name="3"/>
                        </View>
                        <View style={styles.row}>
                            <Button double name="0"/>
                            <Button name=","/>
                        </View>
                    </View>
                    <View style={styles.operation}>
                        <Button name="/"/>
                        <Button name="X"/>
                        <Button name="-"/>
                        <Button name="+"/>
                        <Button name="="/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    shide: {
      display: 'none'
    },
    resultText:{
        fontSize:72,
        color:'white',
    },
    container:{
        display: 'flex',
        flex: 1,
    },
    row:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    result:{
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems:'flex-end',
        justifyContent: 'flex-end',
    },
    buttons:{
        flex: 2,
        flexDirection: 'row',
    },
    numbers:{
        flex: 3,
        backgroundColor: '#505050',
    },
    operation:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FF9500'
    },
    operationLeft:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#373737'
    }
});
