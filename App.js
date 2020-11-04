import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from "./components/Button";

export default class MyLayout extends React.Component {
    constructor() {
        super();

        this.state = { orientation: 'portrait', result: 0, second:0,operation:''}
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

    handleAC(){
        this.setState({result: 0,second:0,operation:''});
    }

    numbers(number){
        const {result} = this.state;
        if (result === 0 || result === "0") {
            this.setState({
                result: number
            })
        } else {
            this.setState({
                result: result.toString() + number
            })
        }
    }

    dot(){
        if(this.state.result.toString().indexOf(',') !== -1) {
            this.setState({result: this.state.result});
        }else{
            this.setState({result: this.state.result + ','});
        }
    }

    operations(op){
        let x = parseFloat(this.state.result);
        if (this.state.second!==0) {
            this.calculate();
        }else {
            this.setState({result: 0, second: x, operation: op})
            //console.log(this.state.second);
        }
    }
    //nie działa dodawańsko => żeby plus plus dało to samo co równa sie
    calculate(){
        let cal;
        const {operation,result,second} = this.state;
        if (operation!==''){
            switch (operation){
                case '+': {
                    cal = parseFloat(result) + second;
                    break;
                }
            }
            this.setState({result:cal,second:0,operation:''});
        }else {
            //console.log("test");
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.result}</Text>
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
                            <Button name="AC" fun={()=>this.handleAC()}/>
                            <Button double name=" "/>
                        </View>
                        <View style={styles.row}>
                            <Button name="7" fun={()=>{this.numbers(7)}}/>
                            <Button name="8" fun={()=>{this.numbers(8)}}/>
                            <Button name="9" fun={()=>{this.numbers(9)}}/>
                        </View>
                        <View style={styles.row}>
                            <Button name="4" fun={()=>{this.numbers(4)}}/>
                            <Button name="5" fun={()=>{this.numbers(5)}}/>
                            <Button name="6" fun={()=>{this.numbers(6)}}/>
                        </View>
                        <View style={styles.row}>
                            <Button name="1" fun={()=>{this.numbers(1)}}/>
                            <Button name="2" fun={()=>{this.numbers(2)}}/>
                            <Button name="3" fun={()=>{this.numbers(3)}}/>
                        </View>
                        <View style={styles.row}>
                            <Button double name="0" fun={()=>{this.numbers(0)}}/>
                            <Button name="," fun={()=>{this.dot()}}/>
                        </View>
                    </View>
                    <View style={styles.operation}>
                        <Button name="/"/>
                        <Button name="X"/>
                        <Button name="-"/>
                        <Button name="+" fun={()=>{this.operations('+')}}/>
                        <Button name="=" fun={()=>{this.calculate()}}/>
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
