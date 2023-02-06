/**
 * File Name: Assingment 1 Portfolio
 * Name: Bhavyadeep Jagani
 * Student ID: 301234500
 * Date: 06 Feb 2023
 */

(function(){
    function start(){
        console.log("App Started...");

    }
    window.addEventListener("load", start);
})();


//Fuintion for Clicking send button on Contact page to send user back to home page and save details entered.
var  button  = document.getElementById("button1");

button.setAttribute("onclick", "move();", "save();");
function move() {

window.location.href = "/home";

}
function save(){
    var fullname = document.myform.fname.value;
    var number = document.getElementById("mnum").value;
    
    var email = document.getElementById("email").value;
    
    var message = document.getElementById("message").value;
}
