import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from "./components/Button";
import { factorial } from 'mathjs'

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
            //tego miejsca nie jestem pewny czy dobrze działa
            this.setState({result: 0, second: x, operation: op})
        }
    }
    calculate(){
        let cal;
        const {operation,result,second} = this.state;
        if (operation!==''){
            switch (operation){
                case '+':
                    cal = parseFloat(result) + second;
                    break;
                case '-':
                    cal = second - parseFloat(result);
                    break;
                case 'x':
                    cal = parseFloat(result) * second;
                    break;
                case '/':
                    if (parseFloat(result)===0){
                        this.setState({result:"nie dziel przez 0"});
                        return;
                    }else {
                        cal =  second / parseFloat(result);
                    }
                    break;
                case 'yx':
                    cal = Math.pow(second,1/result)
                    break;
            }
            this.setState({result:cal,second:0,operation:''});
        }else {
            //console.log("test");
        }
    }

    specialOperations(op){
        let cal;
        const {result} = this.state;
        switch (op){
            case 'x2':
                cal = Math.pow(result,2);
                break;
            case 'x3':
                cal = Math.pow(result,3);
                break;
            case 'ex':
                cal = Math.E * result;
                break;
            case 'ln':
                cal = Math.log(result);
                break;
            case 'e':
                cal = Math.E;
                break;
            case 'pi':
                cal = Math.PI;
                break;
            case 'x!':
                if (result <= 0){
                    this.setState("nie mozna!");
                    return;
                }else {
                    cal = factorial(result);
                }
                break;
            case '10x':
                cal = Math.pow(10,result);
                break;
            case 'log':
                cal = Math.log10(result);
                break;
        }
        this.setState({result:cal});
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
                        <Button hide name="y√x" fun={()=>{this.operations('yx')}}/>
                        <Button hide name="e×" fun={()=>{this.specialOperations('ex')}}/>
                        <Button hide name="ln" fun={()=>{this.specialOperations('ln')}}/>
                        <Button hide name="e" fun={()=>{this.specialOperations('e')}}/>
                        <Button hide name="π" fun={()=>{this.specialOperations('pi')}}/>
                    </View>
                    <View style={[styles.operationLeft,
                        this.state.orientation==="portrait" ? styles.shide : '',]}>
                        <Button hide name="x!" fun={()=>{this.specialOperations('x!')}}/>
                        <Button hide name="10×" fun={()=>{this.specialOperations('10x')}}/>
                        <Button hide name="log" fun={()=>{this.specialOperations('log')}}/>
                        <Button hide name="x²" fun={()=>{this.specialOperations('x2')}}/>
                        <Button hide name="x³" fun={()=>{this.specialOperations('x3')}}/>
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
                        <Button name="/" fun={()=>{this.operations('/')}}/>
                        <Button name="X" fun={()=>{this.operations('x')}}/>
                        <Button name="-" fun={()=>{this.operations('-')}}/>
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
