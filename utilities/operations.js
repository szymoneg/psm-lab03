import {factorial,evaluate} from "mathjs";

const Calculations = (operations, value, state) => {
    switch (operations) {
        case "number" :
            return numbers(state, value);
        case "operation":
            return oper(state,value);
        case "specialOperation":
            return specialOperations(state,value);
        case "dot":
            return dot(state);
        case "AC":
            return handleAC(state);
        case "eval":
            return evalFun(state);
    }
}

const numbers = (state, number) => {
    const {result} = state;
    if (result === 0 || result === "0") {
        return {result: number}
    } else {
        return {result: result.toString() + number,operation:false }
    }
}

const oper = (state, op) => {
    if (state.operation === false || ["(", ")"].includes(op)) {
        console.log("chuj")
        return {result: state.result.toString() + op, operation: true};
    }else {
        console.log("sisuak")
        return {result: state.result.toString().substring(0, state.result.length - 1) + op};
    }
}


const specialOperations = (state,oper) =>{
    let cal;
    let {result} = state;
    let logiXDD = evaluate(result);
    switch (oper){
        case 'x2':
            return {result: result.toString()+oper, operation: false };
        case 'x3':
            return {result: result.toString()+oper, operation: false };
        case 'e^':
            return {result: result.toString()+oper, operation: false };
        case 'log(':
            if (result<0){
                return {result: "Błąd!", operation: false};
            }else {
                return {result: result.toString()+oper, operation: false };
            }
            break;
        case 'e':
            return {result: result.toString()+oper, operation: false };
        case 'pi':
            return {result: result.toString()+oper, operation: false }
        case '10^':
            return {result: result.toString()+oper, operation: false }
        case 'log':
            if (result<0){
                return {result: "Błąd!"};
            }else {
                cal = Math.log10(parseFloat(logiXDD));
            }
            break;
    }
    return {result:cal.toString()};
}

const dot = (state) => {
    if(state.result.toString().indexOf('.') !== -1) {
        return {result: state.result};
    }else{
        return {result: state.result + '.'};
    }
}

const handleAC = () =>{
    return {result: '',operation:false};
}

const evalFun = (state) => {
    return {result: evaluate(state.result), operation: false}
}

const validateEval = (state) =>{

}

export default Calculations;

