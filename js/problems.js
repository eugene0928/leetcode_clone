const allProblems = [
    {
        id: 1,
        heading: "1.Palindrome Number",
        definition: `Write "isPalindrome" function. Given an integer x, return true if x is palindrome integer.
        An integer is a palindrome when it reads the same backward as forward.
        For example, 121 is a palindrome while 123 is not.`, 
        example1: {input: 121, answer: true},
        example2: {input: -121, answer: false},
        tests: [ 
            {test: -998, answer: false},
            {test: 1122211, answer: true},
            {test: 1234, answer: false},
            {test: 555155, answer: false},
            {test: 9911991, answer: false},
            {test: 7447, answer: true},
            {test: 951159, answer: true},
            {test: 75412, answer: false},
            {test: 2589852, answer: true},
            {test: 11111, answer: true},
         ],
        funcName: 'isPalindrome'

    }, 

    {
        id: 2,
        heading: "2.Power of number",
        definition: `Write "numPower" function. Given a integer number calculate its fifth power without using in-built functions.
        For example, 2 where a = 2 and output will be 32.`,
        example1: {input: 2, answer: 32},
        example2: {input: 3, answer: 243},
        tests: [
            {test: 3, answer: 243},
            {test: 4, answer: 1024},
            {test: 6, answer: 7776},
            {test: 10, answer: 100000},
            {test: 7, answer: 16807},
            {test: 2, answer: 32},
            {test: 3, answer: 243},
            {test: 18, answer: 1889568},
            {test: 11, answer: 161051},
            {test: 2, answer: 32},

        ],
        funcName: "numPower"
    }, 

    {
        id: 3,
        heading: "3.Find biggest",
        definition: `Write "biggest" function. Given array find its largest element without using in-built functions.
        For example, [2, 5, 7, 19] and output will be 19.`,
        example1: {input: [2, 5, 7, 19], answer: 19},
        example2: {input: [1], answer: 1},
        tests: [
            {test: [3, -2, 0], answer: 3},
            {test: [-1, -2, -3, -5, -1], answer: -1},
            {test: [0, 9, 9, 10], answer: 10},
            {test: [0, 9, 2, 1, 3 ,21, 32], answer: 32},
            {test: [4, -9, 19, -10], answer: 19},
            {test: [1, 9, -9,-10, 0, 2], answer: 9},
            {test: [33, -29, -112339, -124124324124.10], answer: 33},
            {test: [0, -9, 19, 102210, -1235141141241, 102210.1], answer: 102210.1},
            {test: [1, 19, 29, 110], answer: 110},
            {test: [0], answer: 0},

        ],
        funcName: "biggest"
    },

    {
        id: 4,
        heading: "4.Sum",
        definition: `Write "sum" function. Given array calculate its sum.
        For example, [1, 2, 3, 4] and output will be 10 as 1+2+3+4=10`,
        example1: {input: [1,2,3,4], answer: 10},
        example2: {input: [-2, -4, 10], answer: 4},
        tests: [
            {test: [3, -2, 0], answer: 1},
            {test: [1, 2, 3, 4], answer: 10},
            {test: [-2, -4, 10], answer: 4},
            {test: [-1, -2, -3, -5, -1], answer: -12},
            {test: [0, 9, 9, 10], answer: 28},
            {test: [1, 9, 9, 10], answer: 29},
            {test: [10, 9, 9, 10], answer: 38},
            {test: [10, 10, 9, 10], answer: 39},
            {test: [10, 10, 10, 10], answer: 40},
            {test: [0, 0, 0, -1, 1, -1, 1], answer: 0}
        ],
        funcName: "sum"
    }, 

    {
        id: 5,
        heading: "5.Find longest string",
        definition: `Write "longestStr" function. Given array find longest string.
        For example, ['hello', 'hi', 'go'] and output will be 'hello' as its  length is the largest in the array.`,
        example1: {input: ['hello', 'hi', 'go'], answer: 'hello'},
        example2: {input: ['a'], answer: 'a'},
        tests: [
            {test: ['hello', 'hi', 'go'], answer: 'hello'},
            {test: ['a'], answer: 'a'},
            {test: ['pc', 'laptop', 'linux'], answer: 'laptop'},
            {test: ['gentoo', 'linux', 'windows', 'arch'], answer: 'windows'},
            {test: ['t', 'tt', 'tt', 't'], answer: 'tt'},
            {test: ['apple', 'banana', 'tt', 't'], answer: 'banana'},
            {test: ['t', 'cherry', 'toy', 't'], answer: 'cherry'},
            {test: ['boy', 'toy', 'ball', 't'], answer: 'ball'},
            {test: ['doll', 'ball', 'bell', 'ring'], answer: 'doll'},
            {test: ['t', 'tt', 'tt', 't'], answer: 'tt'},
        ],
        funcName: "longestStr"
    }
]