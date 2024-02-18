


function doSomething(){
    var greetings = document.getElementById("hello_text").innerHTML;
    if (greetings == "Hello"){
        document.getElementById("hello_text").innerHTML = "Goodbye"
    } else {
        document.getElementById("hello_text").innerHTML = "Hello"
    }
}