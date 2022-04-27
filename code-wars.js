//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft
};

//Cat years,Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  let answer = [0,0,0]
  answer[0] = humanYears
  if(humanYears === 1){
    answer[1] = 15
  }else if(humanYears === 2){
    answer[1] = 24
  }else{
    answer[1] = 24 + (humanYears - 2) * 4
  }
  if(humanYears === 1){
    answer[2] = 15
  }else if(humanYears === 2){
    answer[2] = 24
  }else{
    answer[2] = 24 + (humanYears - 2) * 5
  }
  return answer
}

//You Got Change?
function giveChange(amount) {
  let tracker = amount
  let answer = [0,0,0,0,0,0]
  if(tracker >= 100){
    answer[5] = Math.floor(tracker / 100)
    tracker = tracker - (answer[5] * 100)
  }
  if(tracker >= 50){
    answer[4] = Math.floor(tracker / 50)
    tracker = tracker - (answer[4] * 50)
  }  
  if(tracker >= 25){
    answer[3] = Math.floor(tracker / 25)
    tracker = tracker - (answer[3] * 25)
  }
  if(tracker >= 10){
      answer[2] = Math.floor(tracker / 10)
      tracker = tracker - (answer[2] * 10)
  }
  if(tracker >= 5){
      answer[1] = Math.floor(tracker / 5)
      tracker = tracker - (answer[1] * 5)
  }
  if(tracker > 0){
    answer[0] = tracker
  }
  return answer
}

//Sort numbers
function solution(nums){
  if(nums){
      return nums.sort(function(a, b){return a-b});
  }else{
    return []
  }
}

//Remove String Spaces
function noSpace(x){
  let arr = x.split('')
  let answer = []
  arr.forEach(x => {
    console.log(x)
    if(x !== ' '){
      answer.push(x)
    }
  })
  return answer.join('')
}
 
//Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join().replace(',',' ')
}

//Opposites Attract
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}

//If you can't sleep, just count sheep!!
var countSheep = function (num){
  let message = ''
  if(num === 0){
    return message
  }
  else{
  for(let i = 1; i <= num; i ++){
    message += `${i} sheep...`
    }
  }
  return message
}

//Freudian translator
function toFreud(string) {
  let arr = string.split(' ')
  let answer = ''
  console.log(arr)
  if (arr[0] === ''){
    return ""
  }else{
    arr.forEach(x => answer += ' sex')
  }
return answer.trim();
}

//Powers of 2
function powersOfTwo(n){
  let arr = []
  for(let i = 0; i <= n; i++){
    arr.push(Math.pow(2, i))
  }
  return arr
}

//Check same case
function sameCase(a, b){
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  if(letters.includes(a.toLowerCase()) && letters.includes(b.toLowerCase())){
    if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
    }else{
      return 0
    }
  }else{
    return -1
  }
}

//Fundamentals: Return
function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return Math.pow(a, b)
}
  
function subt(a,b){
  return a - b
}

//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  //return true if yourPoints is greater than the class average
  let sum = 0
  classPoints.forEach(x => sum += x)
  let classAvg = sum / classPoints.length
  return yourPoints > classAvg
}

//Convert a string to an array
function stringToArray(string){
    return string.split(' ')
  }