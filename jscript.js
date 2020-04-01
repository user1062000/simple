var exp = "";
function zero(){
	exp += "0";
	set();
}
function one(){
	exp += "1";
	set();
}
function two(){
	exp += "2";
	set();
}
function three(){
	exp += "3";
	set();
}
function four(){
	exp += "4";
	set();
}
function five(){
	exp += "5";
	set();
}
function six(){
	exp += "6";
	set();
}
function seven(){
	exp += "7";
	set();
}
function eight(){
	exp += "8";
	set();
}
function nine(){
	exp += "9";
	set();
}
function add(){
	exp += "+";
	set();
}
function minus(){
	exp += "-";
	set();
}
function multiply(){
	exp += "*";
	set();
}
function divide(){
	exp += "/";
	set();
}
function clearOut(){
	document.getElementById("output").value = "0";
	reset();
}
function equals(){
	document.getElementById("output").value = eval(exp);
	exp = eval(exp);
}
function set(){
	document.getElementById("output").value = exp;
}
function reset(){
	exp = "";
}
function backspace(){
	exp = exp.substring(0,exp.length-1);
	set();
}
function sine(){
	exp = "sin(";
	set();
}
