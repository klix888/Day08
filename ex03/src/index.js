// Write code below this line
var myGlobalVariable = 10;
function funtion1() {
  notGlobalVariable = 5;
  
}
// Write code above this line
function function2() {
  var result = "";
  if (typeof myGlobalVariable != "undefined") {
    result += "myGlobalVariable: " + myGlobalVariable;
  }
  if (typeof notGlobalVariable != "undefined") {
    result += " notGlobalVariable: " + notGlobalVariable;
  }
  console.log(result);
}
funtion1();
function2();

module.exports = {
    funtion1,
    function2
}