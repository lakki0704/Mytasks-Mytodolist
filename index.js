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