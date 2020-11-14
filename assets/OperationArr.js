const OperationSpecArr = [
    [
        {name: 'y√x', operation: 'operation', value: '^(1/'},
        {name: 'e×', operation: 'specialOperation', value: 'e^'},
        {name: 'ln', operation: 'specialOperation', value: 'log('},
        {name: 'e', operation: 'specialOperation', value: 'e'},
        {name: 'π', operation: 'specialOperation', value: 'pi'},
    ],
    [
        {name: 'x!', operation: 'operation', value: '!'},
        {name: '10×', operation: 'specialOperation', value: '10^'},
        {name: 'log', operation: 'specialOperation', value: 'log'},
        {name: 'x²', operation: 'specialOperation', value: 'x2'},
        {name: 'x³', operation: 'specialOperation', value: 'x3'},
    ],
]

const Operation = [
    [
        {name: 'AC', operation: 'AC'},
        {name: '(', operation: 'operation', value: '('},
        {name: ')', operation: 'operation', value: ')'}
    ],
    [
        {name: '7', operation: 'number', value: 7},
        {name: '8', operation: 'number', value: 8},
        {name: '9', operation: 'number', value: 9}
    ],
    [
        {name: '4', operation: 'number', value: 4},
        {name: '5', operation: 'number', value: 5},
        {name: '6', operation: 'number', value: 6}
    ],
    [
        {name: '1', operation: 'number', value: 1},
        {name: '2', operation: 'number', value: 2},
        {name: '3', operation: 'number', value: 3}
    ],
    [
        {name: '0', operation: 'number', value: 0, double:true},
        {name: '.', operation: 'dot'}
    ]
]
const Orange = [
    [
        {name: '/', operation: 'operation', value: '/'},
        {name: 'X', operation: 'operation', value: 'X'},
        {name: '-', operation: 'operation', value: '-'},
        {name: '+', operation: 'operation', value: '+'},
        {name: '=', operation: 'eval', value: '='},
    ],
]

export {OperationSpecArr,Operation,Orange};