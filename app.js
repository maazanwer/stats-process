
var randomNumber = [];
var x = []
for (var i = 0; i < 1700; i++) {
var no = Math.random().toFixed(3)
randomNumber.push(no)
}
randomNumber.forEach(function(n){
  var value = (-(1/5) * Math.log(1 - n)).toFixed(3)
  x.push(value)
 
  document.writeln(" <li>" + n + " </li> ")
  
  document.writeln("<br>")
})
document.write("The x value part is starting")
x.forEach(function(n){
  document.writeln("<li>" + n + "</li>")
})

