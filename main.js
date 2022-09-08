let password = document.getElementById("password");
let changeType = document.getElementById("changeType");
let img = document.getElementById("img");
let body = document.querySelector("body")
function see(){
    changeType.onclick = function(){
    password.type="text";
    img.src="hide.png";
    hide()
}}
function hide(){
    changeType.onclick = function(){
    password.type="password";
    img.src="e2ye.png";
    see()
}}
see();