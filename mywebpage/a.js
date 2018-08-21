function changeColor() {

var colorValue = prompt("What background color?");
document.body.style.backgroundColor = colorValue;
}

function changeTextColor() {

    var colorValue = prompt("What text color?");
    document.body.style.color = colorValue;
    }
    
function changeTextsize() {

        var colorValue = prompt("What text size?");
        document.body.style.fontSize = size;
        }

function welcomeMessage() {

            var name = prompt("What is thy name?");
           var message = "<h1>Hello " + name + "&#x263A</h1>";
            document.getElementById("line1").innerHTML = message;
            }