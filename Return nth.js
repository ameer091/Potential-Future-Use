/*This code is to return the nth term of a series of numbers
That is to say if we use 1 as a parameter, it will return 1
If we use 2 as a parameter it will return 1 + 1/4 to return 1.25
If we use 3 '' return 1 + 1/4 + 1/7 = 1.39
If we use 4 '' return 1 + 1/4 + 1/7 + 1/10 = 1.49
May be useful later
*/

function nthTerm(num){
  let sumOfN = 0
  for (var i = 0, i < n; i++){
    sum += 1/ (3*i+1)
  }
  return sumOfN.toFixed(2)
  //toFixed 2 is for 2 decimal places
}