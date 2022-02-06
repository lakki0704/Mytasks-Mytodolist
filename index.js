function myfunction() {

    document.getElementById("extra").innerHTML = "Task :" + '<input type="text" name="task1" placeholder="Enter task ...." id="Task4" class="taski">';
    document.getElementById("extra2").innerHTML = "Task :" + '<input type="text" name="task1" placeholder="Enter task ...." id="Task5" class="taski">';
    document.getElementById("extra3").innerHTML = "Task :" + '<input type="text" name="task1" placeholder="Enter task ...." id="Task6" class="taski">';
    document.getElementById("button1").innerHTML = "Maximum tasks written";

}

function addtask() {

    var x = document.getElementById("Task1");
    var newtask = x.value;

    if (newtask != " ") {
        var item = document.createElement("li");
        item.innerHTML = newtask;
        document.getElementById("yourtask").appendChild(item);
    } else {
        alert('Please enter task! ');

    }


}
function markDone(item) {

    item.classList.toggle("strike");
    //     var x = document.getElementById("message");
    //     x.classList.toggle("message1");
}

function remove(item) {

    item.remove();
}


function writetask() {
    var count;
    for (var i = 4; i < 100; i++) {
        var x = document.createElement("li");
        x.innerHTML = '<label for="Task1" class="text-white fs-5">' + "Task : " + '<input type="text" name="task1" placeholder="Enter task ...." class="taski" ' + 'id = Task' + i + ' >' + '</label>' + '<br>';
        for (var j = i - 1; j < i; j++) {
            var c = document.getElementById("Task" + j);
            var newtask = c.value;
            if (newtask != "") {
                document.getElementById("tasks").appendChild(x);
            }
        }
        count = i + 1;
    }

}



var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var Interval;
var sec = 0;
var min = 0;
//var hrs = 0;
start.onclick = function() {

    clearInterval(Interval)
    Interval = setInterval(startTimer, 1000); // setinterval calls the function for the specified interval (here 1000 miliseconds = 1 second)
    // it will stop only when clearInterval function  is called 
}

stop.onclick = function() {

    clearInterval(Interval);
}

reset.onclick = function() {

    clearInterval(Interval);
    sec = 0;
    min = 0;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
}

function startTimer() {
    sec++;

    if (sec <= 60) {
        seconds.innerHTML = sec + " seconds";
    }

    if (sec > 60) {
        min = Math.floor(sec / 60);
        minutes.innerHTML = min + " minutes";
        seconds.innerHTML = (sec % 60) + " seconds";

    }



};
