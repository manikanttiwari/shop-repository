window.addEventListener("load", bindEvents);
function bindEvents(){
    document.getElementById("nextqstn").addEventListener("click", prinitQuestions);
    document.getElementById("submit").addEventListener("click", totalMarks);
    
}
function prinitQuestions(){
    //setTimeout(function(){totalMarks()}, 50000);
    document.getElementById("submit").disabled = false;
    document.getElementById("nextqstn").disabled = true;
    for(i=0;i<JSON.parse(localStorage.getItem("key"));i++){
    
    var j = "hello"+i;
    
    var obj = JSON.parse(localStorage.getItem(j));
//    var p=obj.qstn;
//console.log(p);
    var p = obj.qstn;
    var q = obj.opt1;
    var r = obj.opt2;
    var s = obj.opt3;
    var t = obj.opt4;
   // console.log(s);
    var tbody = document.getElementById("printqstn");
    var tr = tbody.insertRow();
    var cell = tr.insertCell(0);
        var z = i+1;
    cell.innerHTML = "<span> <b>Question:"+z+"- <b>"+p+"<br><b> (i): <b>"+q+"<br><b> (ii): <b>"+r+"<br><b> (iii): <b>"+s+"<br><b> (iv): <b>"+t+"<br></span>";
        var input = document.createElement("input");
        input.type = "text";
        input.id = j;
        cell.appendChild(input);
    
    }
}

function totalMarks(){
   // alert("time over!!!!");
    var total = 0;
    for(i=0;i<JSON.parse(localStorage.getItem("key"));i++){
    
    var j = "hello"+i;
    
    var obj = JSON.parse(localStorage.getItem(j));
    var p = obj.answer;
    if(document.getElementById(j).value.toLowerCase() == p.toLowerCase()){
        total = total + 2;
    }
    }
        var marksCount = document.createElement("span");
    document.getElementById("submit").disabled = true;
    document.getElementById("nextqstn").disabled = true;
        document.getElementById("printTotal").innerHTML = "<span><b>total marks:<b> </span> "+total;
    
}