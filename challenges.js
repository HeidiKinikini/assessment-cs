

function sumToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]

    
        for (let k = i + 1; k < arr.length; k++){
            let comparedNumber = arr[k]

            if (comparedNumber + currentNumber === 0) {
                return true
            }
        }
    }
    return false
}

console.log(sumToZero([[2, 4, 0, 78, 2]]))

// Time Complexity = O(n^2)




function uniqChars (str){

    for(let i = 0; i < str.length; i++) {
        for(let j = 0 + 1; j < str.length ; j++) {
            if(str[i] === str[j]) {
                return false
            } else {
                return true
            }
            
        }
    }

}
console.log(uniqChars("Monday"))

// Time Complexity = O(n^2) because nested for loops

const str = 'The quick brown fox jumps over the lazy dog.'

const isPangram = (str = '') => {
    str = str.toLowerCase()
    const {length} = str
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alphaArr = alphabets.split('')
    for (let i = 0; i < length; i++){
        const el = str[i]
        const index = alphaArr.indexOf(el) 
        if(index !== -1){
            alphaArr.splice(index, 1)
        }
    }
    return !alphaArr.length
}

console.log(isPangram(str))

//The time complexity is 0(n)--linear because the longer the sentence the more time it will take with the one for loop.


function longestWord (str1, str2) {

    if(str1.length > str2.length){
        console.log(str1)
    } else if (str2.length > str1.length){
        console.log(str2)
    }


}
longestWord("Hello World", "hi")

// Time complexity would be linear --- O(n). This is based on how many characters need to be scaned. 