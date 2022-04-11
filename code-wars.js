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