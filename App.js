import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from "./components/Button";
import { factorial } from 'mathjs'
import Calculations from "./utilities/operations";
import {OperationSpecArr,Operation,Orange} from "./assets/OperationArr";

export default class MyLayout extends React.Component {
    constructor() {
        super();
        this.state = {result: 0, second:0, operation:''}
    }

    getOrientation = () => {
        if( this.refs.rootView ) {
            if( Dimensions.get('window').width < Dimensions.get('window').height ) {
                this.setState({ orientation: 'portrait'});
            }
            else {
                this.setState({ orientation: 'landscape'});
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

    handleKeys = (operation, value) => {
        this.setState(state => Calculations(operation,value,state))
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.result}</Text>
                </View>
                <View style={styles.buttons}>
                    {OperationSpecArr.map(value => (
                        <View ref = "rootView" style={[styles.operationLeft, this.state.orientation==="portrait" ? styles.shide : '',]}>
                            {value.map(item =>(
                                <Button name={item.name} fun={()=>{this.handleKeys(item.operation,item.value)}}/>
                            ))}
                        </View>
                        )
                    )
                    }
                    <View style={styles.numbers}>
                        {Operation.map(value => (
                            <View style={styles.row}>
                                {value.map(indeks => (
                                    <Button name={indeks.name} double={indeks.double} fun={()=>this.handleKeys(indeks.operation,indeks.value)}/>
                                ))}
                            </View>
                        ))}
                    </View>
                    {Orange.map(value => (
                        <View style={styles.operation}>
                            {value.map(index => (
                                <Button name={index.name} fun={()=>{this.handleKeys(index.operation,index.value)}}/>
                            ))}
                        </View>
                    ))}
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
