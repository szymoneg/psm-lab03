import {factorial} from "mathjs";

const Calculations = (operations, value, state) => {
    switch (operations) {
        case "number" :
            return numbers(state, value);
        case "operation":
            return oper(state,value);
        case "calculate":
            return calculate(state);
        case "specialOperation":
            return specialOperations(state,value);
        case "dot":
            return dot(state);
        case "AC":
            return handleAC(state);
    }
}

const numbers = (state, number) => {
    const {result} = state;
    if (result === 0 || result === "0") {
        return {
            result: number
        }
    } else {
        return {
            result: result.toString() + number
        }
    }
}

const oper = (state, op) => {
    let x = parseFloat(state.result);
    if (state.operation === '') {
        return {result:0,second:x,operation: op};
    }else {
        return {operation: op};
    }
}

const calculate = (state) =>{
    let cal;
    const {operation,result,second} = state;
    if (operation!==''){
        switch (operation){
            case '+':
                cal = parseFloat(result) + parseFloat(second);
                break;
            case '-':
                cal = second - parseFloat(result);
                break;
            case 'X':
                cal = parseFloat(result) * second;
                break;
            case '/':
                if (parseFloat(result)===0){
                    return {result:"nie dziel przez 0"};
                }else {
                    cal =  second / parseFloat(result);
                }
                break;
            case 'yx':
                if (second < 0){
                    return {result: "Błąd"};
                }else {
                    cal = Math.pow(second, 1 / result)
                }
                break;
        }
        return {result:cal,second:0,operation:''};
    }
}

const specialOperations = (state,oper) =>{
    let cal;
    let {result} = state;
    switch (oper){
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
            if (result<0){
                return {result: "Błąd!"};
            }else {
                cal = Math.log(result);
            }
            break;
        case 'e':
            cal = Math.E;
            break;
        case 'pi':
            cal = Math.PI;
            break;
        case 'x!':
            if (result <= 0){
                return {result: "nie mozna!"};
            }else {
                cal = factorial(result);
            }
            break;
        case '10x':
            cal = Math.pow(10,result);
            break;
        case 'log':
            if (result<0){
                return {result: "Błąd!"};
            }else {
                cal = Math.log10(result);
            }
            break;
        case '+/-':
            cal = -result;
            break;
        case '%':
            const { second, operation} = state;
            if (operation === "x" || operation === "/") {
                cal = result / 100;
            } else {
                cal = (second * result) / 100;
            }
            break;
    }
    return {result:cal};
}

const dot = (state) => {
    if(state.result.toString().indexOf('.') !== -1) {
        return {result: state.result};
    }else{
        return {result: state.result + '.'};
    }
}

const handleAC = (state) =>{
    return {result: 0,second:0,operation:''};
}

export default Calculations;

